<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- Sidebar -->
        <side-bar />

        <!-- Main content -->
        <main class="col-md-9 ms-sm-auto col-lg-9 px-md-4">
          <!-- Header -->
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">TaskFlow</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
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
                        12
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
                        8
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
                        3
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
                        1
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
                      Filter: All
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">All</a></li>
                      <li><a class="dropdown-item" href="#">Pending</a></li>
                      <li><a class="dropdown-item" href="#">In Progress</a></li>
                      <li><a class="dropdown-item" href="#">Completed</a></li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
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
                        <tr style="cursor: pointer">
                          <td>
                            <div>
                              <div class="fw-bold">Design Homepage Layout</div>
                              <div class="text-muted small">
                                Create wireframes and mockups for the new
                                homepage...
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="badge bg-danger">High</span>
                          </td>
                          <td>
                            <span class="badge bg-primary">In Progress</span>
                          </td>
                          <td>Jan 15, 2024</td>
                          <td>
                            <div class="btn-group" role="group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-primary"
                              >
                                <i class="bi bi-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-danger"
                              >
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr style="cursor: pointer">
                          <td>
                            <div>
                              <div class="fw-bold">
                                Implement User Authentication
                              </div>
                              <div class="text-muted small">
                                Set up user registration, login, and password
                                reset...
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="badge bg-danger">High</span>
                          </td>
                          <td>
                            <span class="badge bg-warning">Pending</span>
                          </td>
                          <td>Jan 20, 2024</td>
                          <td>
                            <div class="btn-group" role="group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-primary"
                              >
                                <i class="bi bi-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-danger"
                              >
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr style="cursor: pointer">
                          <td>
                            <div>
                              <div class="fw-bold">Database Migration</div>
                              <div class="text-muted small">
                                Migrate existing user data to the new database
                                schema...
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="badge bg-warning">Medium</span>
                          </td>
                          <td>
                            <span class="badge bg-success">Completed</span>
                          </td>
                          <td>Jan 10, 2024</td>
                          <td>
                            <div class="btn-group" role="group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-primary"
                              >
                                <i class="bi bi-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-danger"
                              >
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr style="cursor: pointer">
                          <td>
                            <div>
                              <div class="fw-bold">API Documentation</div>
                              <div class="text-muted small">
                                Write comprehensive API documentation for all
                                endpoints...
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="badge bg-success">Low</span>
                          </td>
                          <td>
                            <span class="badge bg-warning">Pending</span>
                          </td>
                          <td>Jan 25, 2024</td>
                          <td>
                            <div class="btn-group" role="group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-primary"
                              >
                                <i class="bi bi-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-danger"
                              >
                                <i class="bi bi-trash"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr style="cursor: pointer">
                          <td>
                            <div>
                              <div class="fw-bold">Mobile App Testing</div>
                              <div class="text-muted small">
                                Conduct thorough testing of the mobile
                                application...
                              </div>
                            </div>
                          </td>
                          <td>
                            <span class="badge bg-danger">High</span>
                          </td>
                          <td>
                            <span class="badge bg-primary">In Progress</span>
                          </td>
                          <td>Jan 18, 2024</td>
                          <td>
                            <div class="btn-group" role="group">
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-primary"
                              >
                                <i class="bi bi-pencil"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm btn-outline-danger"
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
                  <h5 class="card-title">Design Homepage Layout</h5>
                  <p class="card-text">
                    Create wireframes and mockups for the new homepage design
                    including hero section, features, and footer. This task
                    requires collaboration with the UX team and stakeholder
                    approval.
                  </p>

                  <div class="mb-3">
                    <strong>Priority:</strong>
                    <span class="badge bg-danger ms-2">High</span>
                  </div>

                  <div class="mb-3">
                    <strong>Status:</strong>
                    <span class="badge bg-primary ms-2">In Progress</span>
                  </div>

                  <div class="mb-3">
                    <strong>Due Date:</strong>
                    <span class="ms-2">Jan 15, 2024</span>
                  </div>

                  <div class="mb-3">
                    <strong>Assigned To:</strong>
                    <span class="ms-2">John Doe</span>
                  </div>

                  <div class="mb-3">
                    <strong>Created:</strong>
                    <span class="ms-2">Jan 1, 2024</span>
                  </div>

                  <div class="d-grid gap-2">
                    <button
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#editTaskModal"
                    >
                      <i class="bi bi-pencil me-1"></i>
                      Edit Task
                    </button>
                    <button class="btn btn-success">
                      <i class="bi bi-check-lg me-1"></i>
                      Mark as Completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
              <form>
                <div class="mb-3">
                  <label for="taskTitle" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="taskTitle"
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
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="taskPriority" class="form-label"
                        >Priority</label
                      >
                      <select class="form-select" id="taskPriority">
                        <option value="Low">Low</option>
                        <option value="Medium" selected>Medium</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="taskStatus" class="form-label">Status</label>
                      <select class="form-select" id="taskStatus">
                        <option value="Pending" selected>Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
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
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="taskAssignedTo" class="form-label"
                        >Assigned To</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="taskAssignedTo"
                      />
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
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">Add Task</button>
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
              <form>
                <div class="mb-3">
                  <label for="editTaskTitle" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="editTaskTitle"
                    value="Design Homepage Layout"
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
                  >
Create wireframes and mockups for the new homepage design including hero section, features, and footer.</textarea
                  >
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="editTaskPriority" class="form-label"
                        >Priority</label
                      >
                      <select class="form-select" id="editTaskPriority">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High" selected>High</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="editTaskStatus" class="form-label"
                        >Status</label
                      >
                      <select class="form-select" id="editTaskStatus">
                        <option value="Pending">Pending</option>
                        <option value="In Progress" selected>
                          In Progress
                        </option>
                        <option value="Completed">Completed</option>
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
                        value="2024-01-15"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label for="editTaskAssignedTo" class="form-label"
                        >Assigned To</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="editTaskAssignedTo"
                        value="John Doe"
                      />
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
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">Update Task</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  components: { SideBar },
};
</script>

<style scoped>
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

main {
  margin-left: 0;
}

@media (min-width: 768px) {
  main {
    margin-left: 240px;
  }
}

.table tbody tr:hover {
  background-color: #f8f9fa;
}
</style>
