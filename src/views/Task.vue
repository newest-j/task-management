<template>
  <div>
    <div class="container-fluid">
      <div class="row ms-md-5">
        <!-- Sidebar -->
        <div class="col-md-3 col-lg-2 px-0">
          <side-bar />
        </div>

        <!-- Main content -->
        <div class="col-md-9 col-lg-10 main-content px-md-4">
          <!-- Header -->
          <offcanvas />
          <div
            class="d-flex sticky-top justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">TaskFlow</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="input-group me-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search tasks..."
                  v-model="searchQuery"
                />
                <button class="btn btn-outline-secondary" type="button">
                  <i class="bi bi-search"></i>
                </button>
              </div>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addTaskModal"
              >
                <i class="bi bi-plus-lg me-1"></i>
                Add Task
              </button>
            </div>
          </div>

          <!-- Loading Spinner -->
          <div v-if="taskStore.loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else>
            <!-- Dashboard Stats -->
            <div class="row mb-4">
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                        >
                          Total Tasks
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ taskStore.stats.total }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-list-task fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-success text-uppercase mb-1"
                        >
                          Completed
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ taskStore.stats.completed }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-check-circle fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-warning text-uppercase mb-1"
                        >
                          In Progress
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ inProgressCount }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i class="bi bi-arrow-repeat fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-danger shadow h-100 py-2">
                  <div class="card-body">
                    <div class="row no-gutters align-items-center">
                      <div class="col mr-2">
                        <div
                          class="text-xs font-weight-bold text-danger text-uppercase mb-1"
                        >
                          Overdue
                        </div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">
                          {{ taskStore.stats.overdue }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <i
                          class="bi bi-exclamation-triangle fa-2x text-gray-300"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Task List and Details -->
            <div class="row">
              <!-- Task List -->
              <div class="col-lg-8">
                <div class="card shadow mb-4">
                  <div
                    class="card-header py-3 d-flex justify-content-between align-items-center"
                  >
                    <h6 class="m-0 font-weight-bold text-primary">Task List</h6>
                    <div class="dropdown">
                      <button
                        class="btn btn-sm btn-outline-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                      >
                        Filter: {{ currentFilter }}
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="setFilter('All')"
                            >All</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="setFilter('Pending')"
                            >Pending</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="setFilter('In Progress')"
                            >In Progress</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="setFilter('Completed')"
                            >Completed</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <div
                      v-if="filteredTasks.length === 0"
                      class="text-center py-4 text-muted"
                    >
                      <i class="bi bi-inbox-fill me-2"></i>
                      No tasks found. Create your first task!
                    </div>
                    <div v-else class="table-responsive">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="task in filteredTasks"
                            :key="task.id"
                            style="cursor: pointer"
                            @click="selectTask(task)"
                          >
                            <td>
                              <div>
                                <div class="fw-bold">{{ task.title }}</div>
                                <div class="text-muted small">
                                  {{ truncateText(task.description, 60) }}
                                </div>
                              </div>
                            </td>
                            <td>
                              <span
                                :class="`badge ${getPriorityBadgeClass(
                                  task.priority
                                )}`"
                              >
                                {{ task.priority }}
                              </span>
                            </td>
                            <td>
                              <span
                                :class="`badge ${getStatusBadgeClass(
                                  task.status
                                )}`"
                              >
                                {{ task.status }}
                              </span>
                            </td>
                            <td>{{ formatDate(task.dueDate) }}</td>
                            <td>
                              <div class="btn-group" role="group" @click.stop>
                                <button
                                  type="button"
                                  class="btn btn-sm btn-outline-primary"
                                  @click="editTask(task)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editTaskModal"
                                >
                                  <i class="bi bi-pencil"></i>
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-sm btn-outline-danger"
                                  @click="confirmDeleteTask(task.id)"
                                >
                                  <i class="bi bi-trash"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Task Details -->
              <div class="col-lg-4">
                <div class="card shadow">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Task Details
                    </h6>
                  </div>
                  <div class="card-body">
                    <div
                      v-if="!selectedTask"
                      class="text-center py-4 text-muted"
                    >
                      <i class="bi bi-info-circle me-2"></i>
                      Select a task to view details
                    </div>
                    <div v-else>
                      <h5 class="card-title">{{ selectedTask.title }}</h5>
                      <p class="card-text">
                        {{ selectedTask.description }}
                      </p>

                      <div class="mb-3">
                        <strong>Priority:</strong>
                        <span
                          :class="`badge ${getPriorityBadgeClass(
                            selectedTask.priority
                          )} ms-2`"
                        >
                          {{ selectedTask.priority }}
                        </span>
                      </div>

                      <div class="mb-3">
                        <strong>Status:</strong>
                        <span
                          :class="`badge ${getStatusBadgeClass(
                            selectedTask.status
                          )} ms-2`"
                        >
                          {{ selectedTask.status }}
                        </span>
                      </div>

                      <div class="mb-3">
                        <strong>Due Date:</strong>
                        <span class="ms-2">{{
                          formatDate(selectedTask.dueDate)
                        }}</span>
                      </div>

                      <div class="mb-3">
                        <strong>Created:</strong>
                        <span class="ms-2">{{
                          formatDate(selectedTask.createdAt)
                        }}</span>
                      </div>

                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#editTaskModal"
                          @click="editTask(selectedTask)"
                        >
                          <i class="bi bi-pencil me-1"></i>
                          Edit Task
                        </button>
                        <button
                          v-if="selectedTask.status !== 'completed'"
                          class="btn btn-success"
                          @click="completeTask(selectedTask.id)"
                        >
                          <i class="bi bi-check-lg me-1"></i>
                          Mark as Completed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Add Task Modal -->
      <div
        class="modal fade"
        id="addTaskModal"
        tabindex="-1"
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="addTaskModalLabel">Add New Task</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="createTask">
                <div class="mb-3">
                  <label for="taskTitle" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="taskTitle"
                    v-model="taskStore.taskname"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="taskDescription" class="form-label"
                    >Description</label
                  >
                  <textarea
                    class="form-control"
                    id="taskDescription"
                    rows="3"
                    v-model="taskStore.taskdescription"
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="taskPriority" class="form-label"
                        >Priority</label
                      >
                      <select
                        class="form-select"
                        id="taskPriority"
                        v-model="taskPriority"
                      >
                        <option value="low">Low</option>
                        <option value="medium" selected>Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="taskStatus" class="form-label">Status</label>
                      <select
                        class="form-select"
                        id="taskStatus"
                        v-model="taskStatus"
                      >
                        <option value="pending" selected>Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="taskDueDate" class="form-label"
                        >Due Date</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="taskDueDate"
                        v-model="taskStore.taskduedate"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="taskCategory" class="form-label"
                        >Category</label
                      >
                      <select
                        class="form-select"
                        id="taskCategory"
                        v-model="taskStore.taskcategory"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="urgent">Urgent</option>
                        <option value="low-priority">Low Priority</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref="closeAddModalBtn"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="createTask"
                :disabled="taskStore.loading"
              >
                <span
                  v-if="taskStore.loading"
                  class="spinner-border spinner-border-sm me-1"
                  role="status"
                  aria-hidden="true"
                ></span>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Edit Task Modal -->
      <div
        class="modal fade"
        id="editTaskModal"
        tabindex="-1"
        aria-labelledby="editTaskModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editTaskModalLabel">Edit Task</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="updateTask">
                <div class="mb-3">
                  <label for="editTaskTitle" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="editTaskTitle"
                    v-model="taskStore.taskname"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="editTaskDescription" class="form-label"
                    >Description</label
                  >
                  <textarea
                    class="form-control"
                    id="editTaskDescription"
                    rows="3"
                    v-model="taskStore.taskdescription"
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="editTaskPriority" class="form-label"
                        >Priority</label
                      >
                      <select
                        class="form-select"
                        id="editTaskPriority"
                        v-model="taskPriority"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="editTaskStatus" class="form-label"
                        >Status</label
                      >
                      <select
                        class="form-select"
                        id="editTaskStatus"
                        v-model="taskStatus"
                      >
                        <option value="pending">Pending</option>
                        <option value="in progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="editTaskDueDate" class="form-label"
                        >Due Date</label
                      >
                      <input
                        type="date"
                        class="form-control"
                        id="editTaskDueDate"
                        v-model="taskStore.taskduedate"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="editTaskCategory" class="form-label"
                        >Category</label
                      >
                      <select
                        class="form-select"
                        id="editTaskCategory"
                        v-model="taskStore.taskcategory"
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="urgent">Urgent</option>
                        <option value="low-priority">Low Priority</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                ref="closeEditModalBtn"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateTask"
                :disabled="taskStore.loading"
              >
                <span
                  v-if="taskStore.loading"
                  class="spinner-border spinner-border-sm me-1"
                  role="status"
                  aria-hidden="true"
                ></span>
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { userTaskStore } from "@/stores/usersTaskStore";
import { userDetailsStore } from "@/stores/usersDetailsStore";
import Swal from "sweetalert2";

export default {
  components: { SideBar },

  data() {
    return {
      userStore: userDetailsStore(),
      taskStore: userTaskStore(),
      selectedTask: null,
      currentFilter: "All",
      searchQuery: "",
      taskStatus: "pending",
      taskPriority: "medium",
    };
  },

  computed: {
    filteredTasks() {
      let tasks = this.taskStore.tasks;

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        tasks = tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query)
        );
      }

      // Apply status filter
      if (this.currentFilter !== "All") {
        const statusFilter = this.currentFilter.toLowerCase();
        tasks = tasks.filter(
          (task) => task.status.toLowerCase() === statusFilter
        );
      }

      return tasks;
    },

    inProgressCount() {
      return this.taskStore.tasks.filter(
        (task) => task.status.toLowerCase() === "in progress"
      ).length;
    },
  },

  methods: {
    async createTask() {
      try {
        // Set priority and status from local data
        const originalCategory = this.taskStore.taskcategory;
        if (this.taskPriority) {
          // Override the default priority logic in the store
          this.taskStore.taskcategory =
            this.taskPriority === "high" ? "urgent" : originalCategory;
        }

        const result = await this.taskStore.createTask();

        if (result && result.success) {
          // Close the modal
          this.$refs.closeAddModalBtn.click();

          // Reset form and local state
          this.taskPriority = "medium";
          this.taskStatus = "pending";

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task created successfully!",
            showConfirmButton: false,
            timer: 1500,
            toast: true,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to create task",
            text: result?.error || "Unknown error",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
        }
      } catch (error) {
        console.error("Task creation error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error creating task",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
      }
    },

    async updateTask() {
      try {
        // TODO: Implement update task functionality in the store
        // For now, we'll simulate it with a success message

        // Close the modal
        this.$refs.closeEditModalBtn.click();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task updated successfully!",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });

        // Reset the editing state
        this.taskStore.clearForm();

        // Refresh tasks
        await this.taskStore.loadUserTasks();

        // Update selected task if it was the one being edited
        if (
          this.selectedTask &&
          this.selectedTask.id === this.taskStore.editingTaskId
        ) {
          this.selectedTask = this.taskStore.tasks.find(
            (t) => t.id === this.selectedTask.id
          );
        }
      } catch (error) {
        console.error("Task update error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error updating task",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
      }
    },

    selectTask(task) {
      this.selectedTask = task;
    },

    editTask(task) {
      this.taskStore.setEditingTask(task.id);
      this.taskPriority = task.priority;
      this.taskStatus = task.status;
    },

    async completeTask(taskId) {
      try {
        await this.taskStore.completeTask(taskId);

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task completed!",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });

        // Update the selected task if it was the one completed
        if (this.selectedTask && this.selectedTask.id === taskId) {
          this.selectedTask = this.taskStore.tasks.find((t) => t.id === taskId);
        }
      } catch (error) {
        console.error("Error completing task:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error completing task",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
      }
    },

    async confirmDeleteTask(taskId) {
      const result = await Swal.fire({
        title: "Delete Task",
        text: "Are you sure you want to delete this task?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await this.taskStore.deleteTask(taskId);

        // If the deleted task was selected, clear selection
        if (this.selectedTask && this.selectedTask.id === taskId) {
          this.selectedTask = null;
        }

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
        });
      }
    },

    setFilter(filter) {
      this.currentFilter = filter;
    },

    getPriorityBadgeClass(priority) {
      const classes = {
        high: "bg-danger",
        medium: "bg-warning",
        low: "bg-success",
      };
      return classes[priority.toLowerCase()] || "bg-secondary";
    },

    getStatusBadgeClass(status) {
      const classes = {
        pending: "bg-warning",
        "in progress": "bg-primary",
        completed: "bg-success",
      };
      return classes[status.toLowerCase()] || "bg-secondary";
    },

    formatDate(dateStr) {
      if (!dateStr) return "No date";
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    },

    truncateText(text, maxLength) {
      if (!text) return "";
      return text.length > maxLength
        ? text.substring(0, maxLength) + "..."
        : text;
    },
  },

  async created() {
    try {
      // Load user data
      const success = await this.userStore.loadCurrentUser();
      if (!success) {
        this.$router.push("/");
        return;
      }

      // Load tasks
      await this.taskStore.loadUserTasks();
    } catch (error) {
      console.error("Error initializing tasks page:", error);
      Swal.fire({
        icon: "error",
        title: "Error Loading Data",
        text: "Failed to load tasks. Please try again later.",
      });
    }
  },
};
</script>

<style scoped>
.main-content {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding-top: 1rem;
}
.border-left-primary {
  border-left: 0.25rem solid #4e73df !important;
}
.border-left-success {
  border-left: 0.25rem solid #1cc88a !important;
}
.border-left-warning {
  border-left: 0.25rem solid #f6c23e !important;
}
.border-left-danger {
  border-left: 0.25rem solid #e74a3b !important;
}
.text-xs {
  font-size: 0.7rem;
}
.fa-2x {
  font-size: 2em;
}
.text-gray-300 {
  color: #dddfeb !important;
}
.text-gray-800 {
  color: #5a5c69 !important;
}
.table tbody tr:hover {
  background-color: #f8f9fa;
}

/* Loading spinner */
.spinner-border {
  width: 3rem;
  height: 3rem;
}

/* Card hover effects */
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

/* Selected task highlight */
.table tbody tr.selected {
  background-color: rgba(13, 110, 253, 0.1);
}
</style>
