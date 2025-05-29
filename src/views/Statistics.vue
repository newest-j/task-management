<template>
  <div class="container-fluid">
    <div class="row" style="margin-left: 30px">
      <!-- Sidebar -->
      <div class="col-md-3 col-lg-2 sidebar px-0">
        <side-bar />
      </div>
      <!-- Main Content -->
      <div class="col-md-9 col-lg-10">
        <div class="statistics-container">
          <!-- Statistics Header -->
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">Statistics</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  <i class="bi bi-download me-1"></i> Export
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  <i class="bi bi-share me-1"></i> Share
                </button>
              </div>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary dropdown-toggle"
              >
                <i class="bi bi-calendar3 me-1"></i> This Week
              </button>
            </div>
          </div>

          <!-- Main Statistics Cards -->
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
                        24
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
                        16
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
                        5
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
                        3
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

          <!-- Detailed Statistics -->
          <div class="row">
            <!-- Task Completion Progress -->
            <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Task Completion Progress
                  </h6>
                </div>
                <div class="card-body">
                  <h4 class="small font-weight-bold">
                    Server Migration <span class="float-end">20%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-danger"
                      role="progressbar"
                      style="width: 20%"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Sales Tracking <span class="float-end">40%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-warning"
                      role="progressbar"
                      style="width: 40%"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Customer Database <span class="float-end">60%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style="width: 60%"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Payout Details <span class="float-end">80%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-info"
                      role="progressbar"
                      style="width: 80%"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Account Setup <span class="float-end">Complete!</span>
                  </h4>
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Task Distribution -->
            <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Task Distribution by Category
                  </h6>
                </div>
                <div class="card-body">
                  <div class="chart-pie pt-4 pb-2">
                    <!-- Placeholder for chart - in a real app, you'd use Chart.js or similar -->
                    <div
                      class="chart-placeholder d-flex justify-content-center align-items-center"
                    >
                      <div class="chart-distribution">
                        <div class="chart-segment segment-1"></div>
                        <div class="chart-segment segment-2"></div>
                        <div class="chart-segment segment-3"></div>
                        <div class="chart-segment segment-4"></div>
                        <div class="chart-center"></div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 text-center small">
                    <span class="me-2">
                      <i class="bi bi-circle-fill text-primary"></i> Development
                    </span>
                    <span class="me-2">
                      <i class="bi bi-circle-fill text-success"></i> Personal
                    </span>
                    <span class="me-2">
                      <i class="bi bi-circle-fill text-info"></i> Work
                    </span>
                    <span>
                      <i class="bi bi-circle-fill text-warning"></i> Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Task Activity and Trends -->
          <div class="row">
            <!-- Monthly Task Completion -->
            <div class="col-lg-8 mb-4">
              <div class="card shadow mb-4">
                <div
                  class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <h6 class="m-0 font-weight-bold text-primary">
                    Monthly Task Completion
                  </h6>
                  <div class="dropdown no-arrow">
                    <button
                      class="btn btn-link btn-sm"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <a class="dropdown-item" href="#">View Details</a>
                      </li>
                      <li><a class="dropdown-item" href="#">Export Data</a></li>
                      <li><hr class="dropdown-divider" /></li>
                      <li>
                        <a class="dropdown-item" href="#">Print Report</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="card-body">
                  <div class="chart-area">
                    <!-- Placeholder for line chart - in a real app, you'd use Chart.js or similar -->
                    <div class="chart-placeholder">
                      <div class="line-chart">
                        <div
                          class="line-point"
                          style="height: 30%; left: 0%"
                        ></div>
                        <div
                          class="line-point"
                          style="height: 60%; left: 16.6%"
                        ></div>
                        <div
                          class="line-point"
                          style="height: 40%; left: 33.2%"
                        ></div>
                        <div
                          class="line-point"
                          style="height: 80%; left: 49.8%"
                        ></div>
                        <div
                          class="line-point"
                          style="height: 50%; left: 66.4%"
                        ></div>
                        <div
                          class="line-point"
                          style="height: 70%; left: 83%"
                        ></div>
                        <div
                          class="line-point"
                          style="height: 90%; left: 99.6%"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4 d-flex justify-content-between">
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                    <div>Jul</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Personal Productivity -->
            <div class="col-lg-4 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Personal Productivity
                  </h6>
                </div>
                <div class="card-body">
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-1">
                      <span>Daily Average</span>
                      <span>4.2 tasks</span>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 85%"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-1">
                      <span>Weekly Goal</span>
                      <span>28/30 tasks</span>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style="width: 93%"
                        aria-valuenow="93"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-1">
                      <span>On-time Completion</span>
                      <span>87%</span>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 87%"
                        aria-valuenow="87"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex justify-content-between mb-1">
                      <span>Focus Time</span>
                      <span>6.5 hrs/day</span>
                    </div>
                    <div class="progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 81%"
                        aria-valuenow="81"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="row">
            <div class="col-12 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Recent Activity
                  </h6>
                </div>
                <div class="card-body">
                  <div class="timeline">
                    <div class="timeline-item">
                      <div class="timeline-marker bg-success"></div>
                      <div class="timeline-content">
                        <h6 class="mb-0">Task Completed</h6>
                        <p class="mb-0 text-muted">
                          Database Migration task completed successfully
                        </p>
                        <small class="text-muted">Today, 10:30 AM</small>
                      </div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-marker bg-primary"></div>
                      <div class="timeline-content">
                        <h6 class="mb-0">New Task Created</h6>
                        <p class="mb-0 text-muted">
                          API Documentation task added to your list
                        </p>
                        <small class="text-muted">Yesterday, 2:15 PM</small>
                      </div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-marker bg-warning"></div>
                      <div class="timeline-content">
                        <h6 class="mb-0">Task Status Updated</h6>
                        <p class="mb-0 text-muted">
                          Mobile App Testing changed to In Progress
                        </p>
                        <small class="text-muted">Yesterday, 11:45 AM</small>
                      </div>
                    </div>
                    <div class="timeline-item">
                      <div class="timeline-marker bg-danger"></div>
                      <div class="timeline-content">
                        <h6 class="mb-0">Task Deadline Updated</h6>
                        <p class="mb-0 text-muted">
                          Design Homepage Layout deadline extended
                        </p>
                        <small class="text-muted">Jan 10, 2024, 9:20 AM</small>
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

<style scoped>
.statistics-container {
  padding: 0 1rem;
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
/* Chart placeholders */
.chart-placeholder {
  height: 250px;
  position: relative;
  overflow: hidden;
}
/* Pie chart placeholder */
.chart-distribution {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}
.chart-segment {
  position: absolute;
  width: 100%;
  height: 100%;
}
.segment-1 {
  background-color: #4e73df;
  clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%);
}
.segment-2 {
  background-color: #1cc88a;
  clip-path: polygon(50% 50%, 0% 0%, 50% 0%);
}
.segment-3 {
  background-color: #36b9cc;
  clip-path: polygon(50% 50%, 0% 0%, 0% 100%, 25% 100%);
}
.segment-4 {
  background-color: #f6c23e;
  clip-path: polygon(50% 50%, 25% 100%, 100% 100%);
}
.chart-center {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  top: 50px;
  left: 50px;
}
/* Line chart placeholder */
.line-chart {
  position: relative;
  height: 100%;
  width: 100%;
}
.line-point {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #4e73df;
  border-radius: 50%;
  bottom: 0;
  transform: translateY(-50%);
}
.line-point::before {
  content: "";
  position: absolute;
  height: 2px;
  background-color: #4e73df;
  width: 100%;
  left: -50%;
  top: 50%;
}
.line-point:first-child::before {
  display: none;
}
/* Timeline styling */
.timeline {
  position: relative;
  padding-left: 30px;
}
.timeline-item {
  position: relative;
  padding-bottom: 20px;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-marker {
  position: absolute;
  left: -30px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 5px;
}
.timeline-item:not(:last-child)::after {
  content: "";
  position: absolute;
  left: -23px;
  width: 2px;
  background-color: #e3e6f0;
  top: 20px;
  bottom: 0;
}
.text-primary {
  color: #4e73df !important;
}
.text-success {
  color: #1cc88a !important;
}
.text-info {
  color: #36b9cc !important;
}
.text-warning {
  color: #f6c23e !important;
}
.text-danger {
  color: #e74a3b !important;
}
.bg-primary {
  background-color: #4e73df !important;
}
.bg-success {
  background-color: #1cc88a !important;
}
.bg-info {
  background-color: #36b9cc !important;
}
.bg-warning {
  background-color: #f6c23e !important;
}
.bg-danger {
  background-color: #e74a3b !important;
}
</style>
