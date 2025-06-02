<template>
  <div>
    <div class="container-fluid">
      <div class="row ms-md-5">
        <div class="col-md-3 col-lg-2 px-0">
          <side-bar />
        </div>

        <!-- Main Content -->
        <div class="col-md-9 col-lg-10 main-content">
          <!-- Header -->
          <header class="sticky-top bg-white shadow-sm border-bottom p-3 mb-4">
            <offcanvas />
            <div class="d-flex justify-content-between align-items-center">
              <h2 class="mb-0 text-primary">
                <i class="bi bi-house-door me-2"></i>
                TaskFlow
              </h2>
              <div class="d-flex align-items-center">
                <span class="text-muted me-3">
                  {{ userLoaded ? welcomeMessage : "Loading..." }}
                </span>
                <div
                  class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                  style="width: 40px; height: 40px"
                >
                  <i class="bi bi-person"></i>
                </div>
              </div>
            </div>
          </header>

          <!-- Loading Spinner -->
          <div v-if="taskStore.loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <!-- Content Area -->
          <div v-else class="container-fluid px-4">
            <div class="row">
              <!-- Task Creation Form -->
              <div class="col-lg-6 mb-4">
                <div class="card shadow-sm h-100">
                  <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">
                      <i class="bi bi-plus-circle me-2"></i>
                      {{
                        taskStore.editingTaskId
                          ? "Edit Task"
                          : "Create New Task"
                      }}
                    </h5>
                  </div>
                  <div class="card-body">
                    <form @submit.prevent="handleTaskSubmit">
                      <div class="mb-3">
                        <label for="title" class="form-label">
                          <i class="bi bi-pencil me-1"></i>
                          Title
                        </label>
                        <input
                          v-model="taskStore.taskname"
                          type="text"
                          class="form-control"
                          id="title"
                          placeholder="Enter task title"
                          required
                        />
                      </div>

                      <div class="mb-3">
                        <label for="description" class="form-label">
                          <i class="bi bi-text-paragraph me-1"></i>
                          Description
                        </label>
                        <textarea
                          v-model="taskStore.taskdescription"
                          class="form-control"
                          id="description"
                          rows="3"
                          placeholder="Enter task description"
                        ></textarea>
                      </div>

                      <div class="mb-3">
                        <label for="category" class="form-label">
                          <i class="bi bi-tags me-1"></i>
                          Category
                        </label>
                        <select
                          v-model="taskStore.taskcategory"
                          class="form-select"
                          id="category"
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="work">Work</option>
                          <option value="personal">Personal</option>
                          <option value="urgent">Urgent</option>
                          <option value="low-priority">Low Priority</option>
                        </select>
                      </div>

                      <div class="mb-3">
                        <label for="dueDate" class="form-label">
                          <i class="bi bi-calendar me-1"></i>
                          Due Date
                        </label>
                        <input
                          v-model="taskStore.taskduedate"
                          type="date"
                          class="form-control"
                          id="dueDate"
                          required
                        />
                      </div>

                      <div class="d-grid gap-2">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg"
                          :disabled="taskStore.loading"
                        >
                          <i class="bi bi-check-circle me-2"></i>
                          {{
                            taskStore.editingTaskId
                              ? "Update Task"
                              : "Create Task"
                          }}
                        </button>
                        <button
                          v-if="taskStore.editingTaskId"
                          type="button"
                          class="btn btn-secondary"
                          @click="cancelEdit"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <!-- Recent Tasks & Quick Actions -->
              <div class="col-lg-6 mb-4">
                <div class="row">
                  <!-- Recent Tasks -->
                  <div class="col-12 mb-4">
                    <div class="card shadow-sm">
                      <div class="card-header bg-success text-white">
                        <h5 class="mb-0">
                          <i class="bi bi-clock-history me-2"></i>
                          Recent Tasks
                        </h5>
                      </div>
                      <div class="card-body">
                        <!-- No tasks message -->
                        <div
                          v-if="taskStore.tasks.length === 0"
                          class="text-center py-4 text-muted"
                        >
                          <i class="bi bi-inbox-fill me-2"></i>
                          No tasks yet. Create your first task above!
                        </div>
                        <!-- Dynamic Task List from Store -->
                        <div
                          v-for="task in taskStore.recentTasks"
                          :key="task.id"
                          class="d-flex justify-content-between align-items-center border-bottom py-3"
                        >
                          <div class="flex-grow-1">
                            <h6 class="mb-1">{{ task.title }}</h6>
                            <small class="text-muted">
                              <span
                                :class="`badge ${getCategoryBadgeClass(
                                  task.category
                                )} me-2`"
                              >
                                {{ task.category }}
                              </span>
                              <span
                                :class="`badge ${getStatusBadgeClass(
                                  task.status
                                )} me-2`"
                              >
                                {{ task.status }}
                              </span>
                              Due: {{ formatDate(task.dueDate) }}
                            </small>
                          </div>
                          <div class="d-flex gap-1">
                            <button
                              class="btn btn-sm btn-outline-primary"
                              title="Edit"
                              @click="editTask(task.id)"
                            >
                              <i class="bi bi-pencil"></i>
                            </button>
                            <button
                              v-if="task.status === 'pending'"
                              class="btn btn-sm btn-outline-success"
                              title="Complete"
                              @click="completeTask(task.id)"
                            >
                              <i class="bi bi-check"></i>
                            </button>
                            <button
                              class="btn btn-sm btn-outline-danger"
                              title="Delete"
                              @click="confirmDeleteTask(task.id)"
                            >
                              <i class="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                        <div class="text-center mt-3">
                          <router-link
                            to="/dashboard/tasks"
                            class="btn btn-outline-success"
                          >
                            <i class="bi bi-eye me-1"></i>
                            View All Tasks
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Quick Stats -->
                  <div class="col-12">
                    <div class="card shadow-sm">
                      <div class="card-header bg-info text-white">
                        <h5 class="mb-0">
                          <i class="bi bi-speedometer2 me-2"></i>
                          Quick Overview
                        </h5>
                      </div>
                      <div class="card-body">
                        <div class="row text-center">
                          <div class="col-6 mb-3">
                            <div class="border-end">
                              <h4 class="text-primary mb-1">
                                {{ taskStore.stats.total }}
                              </h4>
                              <small class="text-muted">Total Tasks</small>
                            </div>
                          </div>
                          <div class="col-6 mb-3">
                            <h4 class="text-success mb-1">
                              {{ taskStore.stats.completed }}
                            </h4>
                            <small class="text-muted">Completed</small>
                          </div>
                          <div class="col-6">
                            <div class="border-end">
                              <h4 class="text-warning mb-1">
                                {{ taskStore.stats.pending }}
                              </h4>
                              <small class="text-muted">Pending</small>
                            </div>
                          </div>
                          <div class="col-6">
                            <h4 class="text-danger mb-1">
                              {{ taskStore.stats.overdue }}
                            </h4>
                            <small class="text-muted">Overdue</small>
                          </div>
                        </div>
                        <div class="mt-3">
                          <div class="d-flex justify-content-between mb-1">
                            <small>Progress</small>
                            <small>{{ completionPercentage }}%</small>
                          </div>
                          <div class="progress" style="height: 8px">
                            <div
                              class="progress-bar bg-success"
                              role="progressbar"
                              :style="`width: ${completionPercentage}%`"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions Row -->
            <div class="row">
              <div class="col-12">
                <div class="card shadow-sm">
                  <div class="card-header bg-secondary text-white">
                    <h5 class="mb-0">
                      <i class="bi bi-lightning me-2"></i>
                      Quick Actions
                    </h5>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-4 mb-3">
                        <router-link
                          to="/dashboard/tasks"
                          class="btn btn-outline-success w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3 text-decoration-none"
                        >
                          <i class="bi bi-list-check display-6 mb-2"></i>
                          <span>View Tasks</span>
                        </router-link>
                      </div>
                      <div class="col-md-4 mb-3">
                        <router-link
                          to="/dashboard/statistics"
                          class="btn btn-outline-info w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3 text-decoration-none"
                        >
                          <i class="bi bi-bar-chart display-6 mb-2"></i>
                          <span>Statistics</span>
                        </router-link>
                      </div>
                      <div class="col-md-4 mb-3">
                        <router-link
                          to="/dashboard/settings"
                          class="btn btn-outline-warning w-100 h-100 d-flex flex-column align-items-center justify-content-center py-3 text-decoration-none"
                        >
                          <i class="bi bi-gear display-6 mb-2"></i>
                          <span>Settings</span>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userDetailsStore } from "@/stores/usersDetailsStore";
import { userTaskStore } from "@/stores/usersTaskStore";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      userStore: userDetailsStore(),
      taskStore: userTaskStore(),
      userLoaded: false,
    };
  },

  methods: {
    async handleTaskSubmit() {
      try {
        const result = await this.taskStore.createTask();

        if (result && result.success) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: this.taskStore.editingTaskId
              ? "Task updated successfully!"
              : "Task created successfully!",
            showConfirmButton: false,
            timer: 1500,
            toast: true,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to save task",
            text: result?.error || "Unknown error",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
        }
      } catch (error) {
        console.error("Task submission error:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error saving task",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
      }
    },

    editTask(taskId) {
      this.taskStore.setEditingTask(taskId);
    },

    cancelEdit() {
      this.taskStore.clearForm();
    },

    async completeTask(taskId) {
      await this.taskStore.completeTask(taskId);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task completed!",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
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

    getCategoryBadgeClass(category) {
      const classes = {
        work: "bg-primary",
        personal: "bg-info",
        urgent: "bg-danger",
        "low-priority": "bg-secondary",
      };
      return classes[category] || "bg-secondary";
    },

    getStatusBadgeClass(status) {
      const classes = {
        pending: "bg-warning",
        completed: "bg-success",
        overdue: "bg-danger",
      };
      return classes[status] || "bg-secondary";
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
  },

  async created() {
    const success = await this.userStore.loadCurrentUser();
    if (!success) {
      this.$router.push("/");
    } else {
      this.userLoaded = true;
      await this.taskStore.loadUserTasks();
    }
  },

  computed: {
    welcomeMessage() {
      return `Welcome back, ${this.userStore.fullname}!`;
    },
    completionPercentage() {
      const total = this.taskStore.stats.total || 0;
      const completed = this.taskStore.stats.completed || 0;
      return total > 0 ? Math.round((completed / total) * 100) : 0;
    },
  },
};
</script>

<style scoped>
/* Main Content */
.main-content {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

/* Card Enhancements */
.card {
  transition: all 0.3s ease;
  border: none;
  border-radius: 0.75rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

.card-header {
  border-radius: 0.75rem 0.75rem 0 0 !important;
  border-bottom: none;
  font-weight: 600;
}

/* Form Enhancements */
.form-control,
.form-select {
  border-radius: 0.5rem;
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.form-control:focus,
.form-select:focus {
  border-color: #0d6efd;
  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
  transform: translateY(-2px);
}

/* Button Enhancements */
.btn {
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.btn-lg {
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
}

/* Router Link Button Styling */
.btn.text-decoration-none {
  color: inherit;
}

.btn.text-decoration-none:hover {
  color: white !important;
}

/* Progress Bar */
.progress {
  border-radius: 10px;
  background-color: #e9ecef;
}

.progress-bar {
  border-radius: 10px;
  background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
}

/* Badge Styles */
.badge {
  font-size: 0.75rem;
  padding: 0.35em 0.65em;
  border-radius: 0.375rem;
}

/* Header Styling */
header {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95) !important;
}

/* Quick Actions */
.btn-outline-primary:hover,
.btn-outline-success:hover,
.btn-outline-info:hover,
.btn-outline-warning:hover {
  transform: scale(1.05);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .card {
    margin-bottom: 1rem;
  }
}

/* Animation for task items */
.border-bottom {
  transition: all 0.3s ease;
}

.border-bottom:hover {
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

/* Icon styling */
.bi {
  font-size: 1rem;
}

.display-6 {
  font-size: 2rem;
}

/* Loading spinner */
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>
