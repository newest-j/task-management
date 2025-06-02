<template>
  <div class="container-fluid">
    <div class="row ms-md-5">
      <!-- Sidebar -->
      <div class="col-md-3 col-lg-2 px-0">
        <side-bar />
      </div>
      <!-- Main Content -->
      <div class="col-md-9 col-lg-10">
        <div class="statistics-container">
          <!-- Statistics Header -->
          <offcanvas />
          <div
            class="d-flex sticky-top justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">Statistics</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group me-2">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  @click="exportData"
                >
                  <i class="bi bi-download me-1"></i> Export
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  @click="shareData"
                >
                  <i class="bi bi-share me-1"></i> Share
                </button>
              </div>
              <div class="dropdown">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i class="bi bi-calendar3 me-1"></i> {{ selectedPeriod }}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="setPeriod('This Week')"
                      >This Week</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="setPeriod('This Month')"
                      >This Month</a
                    >
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="setPeriod('This Year')"
                      >This Year</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Loading Spinner -->
          <div v-if="taskStore.loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>

          <div v-else>
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

            <!-- Detailed Statistics -->
            <div class="row">
              <!-- Task Status Bar Chart -->
              <div class="col-lg-6 mb-4">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Task Status Overview
                    </h6>
                  </div>
                  <div class="card-body">
                    <canvas
                      ref="statusBarChart"
                      width="400"
                      height="200"
                    ></canvas>
                  </div>
                </div>
              </div>

              <!-- Task Distribution Pie Chart -->
              <div class="col-lg-6 mb-4">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Task Distribution by Category
                    </h6>
                  </div>
                  <div class="card-body">
                    <canvas
                      ref="categoryPieChart"
                      width="400"
                      height="200"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>

            <!-- Task Activity and Trends -->
            <div class="row">
              <!-- Monthly Task Completion Line Chart -->
              <div class="col-lg-8 mb-4">
                <div class="card shadow mb-4">
                  <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                  >
                    <h6 class="m-0 font-weight-bold text-primary">
                      Task Completion Trends
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
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="viewDetails"
                            >View Details</a
                          >
                        </li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="exportData"
                            >Export Data</a
                          >
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <a
                            class="dropdown-item"
                            href="#"
                            @click.prevent="printReport"
                            >Print Report</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="card-body">
                    <canvas
                      ref="trendsLineChart"
                      width="400"
                      height="200"
                    ></canvas>
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
                        <span>{{ dailyAverage }} tasks</span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          :style="`width: ${dailyAveragePercentage}%`"
                          :aria-valuenow="dailyAveragePercentage"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span>Weekly Goal</span>
                        <span>{{ weeklyProgress }}/{{ weeklyGoal }} tasks</span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          :style="`width: ${weeklyProgressPercentage}%`"
                          :aria-valuenow="weeklyProgressPercentage"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span>On-time Completion</span>
                        <span>{{ onTimePercentage }}%</span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          :style="`width: ${onTimePercentage}%`"
                          :aria-valuenow="onTimePercentage"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <div class="d-flex justify-content-between mb-1">
                        <span>Completion Rate</span>
                        <span>{{ completionRate }}%</span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar bg-primary"
                          role="progressbar"
                          :style="`width: ${completionRate}%`"
                          :aria-valuenow="completionRate"
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
                    <div
                      v-if="recentActivities.length === 0"
                      class="text-center py-4 text-muted"
                    >
                      <i class="bi bi-clock-history me-2"></i>
                      No recent activity
                    </div>
                    <div v-else class="timeline">
                      <div
                        v-for="activity in recentActivities"
                        :key="activity.id"
                        class="timeline-item"
                      >
                        <div
                          :class="`timeline-marker ${getActivityMarkerClass(
                            activity.type
                          )}`"
                        ></div>
                        <div class="timeline-content">
                          <h6 class="mb-0">{{ activity.title }}</h6>
                          <p class="mb-0 text-muted">
                            {{ activity.description }}
                          </p>
                          <small class="text-muted">{{
                            formatActivityDate(activity.date)
                          }}</small>
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
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import { userTaskStore } from "@/stores/usersTaskStore";
import { userDetailsStore } from "@/stores/usersDetailsStore";
import { Chart, registerables } from "chart.js";
import Swal from "sweetalert2";

// Register Chart.js components
Chart.register(...registerables);

export default {
  components: { SideBar },

  data() {
    return {
      userStore: userDetailsStore(),
      taskStore: userTaskStore(),
      selectedPeriod: "This Week",
      statusChart: null,
      categoryChart: null,
      trendsChart: null,
      weeklyGoal: 30,
      recentActivities: [],
    };
  },

  computed: {
    inProgressCount() {
      return this.taskStore.tasks.filter(
        (task) => task.status.toLowerCase() === "in progress"
      ).length;
    },

    dailyAverage() {
      const totalTasks = this.taskStore.stats.total;
      const daysInPeriod = 7; // Assuming weekly view
      return totalTasks > 0 ? (totalTasks / daysInPeriod).toFixed(1) : 0;
    },

    dailyAveragePercentage() {
      const target = 5; // Target 5 tasks per day
      return Math.min((this.dailyAverage / target) * 100, 100);
    },

    weeklyProgress() {
      return this.taskStore.stats.completed;
    },

    weeklyProgressPercentage() {
      return Math.min((this.weeklyProgress / this.weeklyGoal) * 100, 100);
    },

    onTimePercentage() {
      const total = this.taskStore.stats.total;
      const overdue = this.taskStore.stats.overdue;
      return total > 0 ? Math.round(((total - overdue) / total) * 100) : 100;
    },

    completionRate() {
      const total = this.taskStore.stats.total;
      const completed = this.taskStore.stats.completed;
      return total > 0 ? Math.round((completed / total) * 100) : 0;
    },

    categoryData() {
      const categories = {};
      this.taskStore.tasks.forEach((task) => {
        const category = task.category || "uncategorized";
        categories[category] = (categories[category] || 0) + 1;
      });
      return categories;
    },
  },

  methods: {
    async initializeCharts() {
      await this.$nextTick();
      this.createStatusBarChart();
      this.createCategoryPieChart();
      this.createTrendsLineChart();
    },

    createStatusBarChart() {
      const ctx = this.$refs.statusBarChart?.getContext("2d");
      if (!ctx) return;

      if (this.statusChart) {
        this.statusChart.destroy();
      }

      this.statusChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Pending", "In Progress", "Completed", "Overdue"],
          datasets: [
            {
              label: "Number of Tasks",
              data: [
                this.taskStore.stats.pending,
                this.inProgressCount,
                this.taskStore.stats.completed,
                this.taskStore.stats.overdue,
              ],
              backgroundColor: [
                "#f6c23e", // Warning - Pending
                "#4e73df", // Primary - In Progress
                "#1cc88a", // Success - Completed
                "#e74a3b", // Danger - Overdue
              ],
              borderColor: ["#f6c23e", "#4e73df", "#1cc88a", "#e74a3b"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });
    },

    createCategoryPieChart() {
      const ctx = this.$refs.categoryPieChart?.getContext("2d");
      if (!ctx) return;

      if (this.categoryChart) {
        this.categoryChart.destroy();
      }

      const categoryData = this.categoryData;
      const labels = Object.keys(categoryData);
      const data = Object.values(categoryData);

      this.categoryChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: labels.map(
            (label) => label.charAt(0).toUpperCase() + label.slice(1)
          ),
          datasets: [
            {
              data: data,
              backgroundColor: [
                "#4e73df", // Primary
                "#1cc88a", // Success
                "#36b9cc", // Info
                "#f6c23e", // Warning
                "#e74a3b", // Danger
                "#6f42c1", // Purple
                "#fd7e14", // Orange
              ],
              borderWidth: 2,
              borderColor: "#ffffff",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });
    },

    createTrendsLineChart() {
      const ctx = this.$refs.trendsLineChart?.getContext("2d");
      if (!ctx) return;

      if (this.trendsChart) {
        this.trendsChart.destroy();
      }

      // Generate sample trend data based on current tasks
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
      const completedData = this.generateTrendData(months.length);
      const createdData = this.generateTrendData(months.length, 1.2);

      this.trendsChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: months,
          datasets: [
            {
              label: "Tasks Completed",
              data: completedData,
              borderColor: "#1cc88a",
              backgroundColor: "rgba(28, 200, 138, 0.1)",
              tension: 0.4,
              fill: true,
            },
            {
              label: "Tasks Created",
              data: createdData,
              borderColor: "#4e73df",
              backgroundColor: "rgba(78, 115, 223, 0.1)",
              tension: 0.4,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });
    },

    generateTrendData(length, multiplier = 1) {
      const baseValue = Math.max(1, Math.floor(this.taskStore.stats.total / 4));
      return Array.from(
        { length },
        () => Math.floor(Math.random() * baseValue * multiplier) + 1
      );
    },

    generateRecentActivities() {
      const activities = [];
      const recentTasks = this.taskStore.tasks.slice(0, 5);

      recentTasks.forEach((task, index) => {
        const daysAgo = index;
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);

        let activityType, title, description;

        if (task.status === "completed") {
          activityType = "completed";
          title = "Task Completed";
          description = `${task.title} was marked as completed`;
        } else if (task.status === "in progress") {
          activityType = "updated";
          title = "Task Status Updated";
          description = `${task.title} changed to In Progress`;
        } else {
          activityType = "created";
          title = "New Task Created";
          description = `${task.title} was added to your task list`;
        }

        activities.push({
          id: `activity-${task.id}`,
          type: activityType,
          title,
          description,
          date: date.toISOString(),
        });
      });

      this.recentActivities = activities;
    },

    getActivityMarkerClass(type) {
      const classes = {
        completed: "bg-success",
        created: "bg-primary",
        updated: "bg-warning",
        overdue: "bg-danger",
      };
      return classes[type] || "bg-secondary";
    },

    formatActivityDate(dateStr) {
      const date = new Date(dateStr);
      const now = new Date();
      const diffTime = Math.abs(now - date);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 0) {
        return (
          "Today, " +
          date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        );
      } else if (diffDays === 1) {
        return (
          "Yesterday, " +
          date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        );
      } else {
        return (
          date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }) +
          ", " +
          date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        );
      }
    },

    setPeriod(period) {
      this.selectedPeriod = period;
      // Refresh charts with new period data
      this.initializeCharts();
    },

    exportData() {
      Swal.fire({
        title: "Export Data",
        text: "Choose export format:",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "CSV",
        cancelButtonText: "PDF",
        showDenyButton: true,
        denyButtonText: "JSON",
      }).then((result) => {
        if (result.isConfirmed) {
          this.exportToCSV();
        } else if (result.isDenied) {
          this.exportToJSON();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          this.exportToPDF();
        }
      });
    },

    exportToCSV() {
      const csvData = this.taskStore.tasks.map((task) => ({
        Title: task.title,
        Status: task.status,
        Category: task.category,
        Priority: task.priority,
        "Due Date": task.dueDate,
        "Created At": task.createdAt,
      }));

      const csv = this.convertToCSV(csvData);
      this.downloadFile(csv, "tasks-statistics.csv", "text/csv");
    },

    exportToJSON() {
      const data = {
        statistics: this.taskStore.stats,
        tasks: this.taskStore.tasks,
        exportDate: new Date().toISOString(),
      };

      const json = JSON.stringify(data, null, 2);
      this.downloadFile(json, "tasks-statistics.json", "application/json");
    },

    exportToPDF() {
      Swal.fire({
        icon: "info",
        title: "PDF Export",
        text: "PDF export functionality would be implemented here using a library like jsPDF.",
      });
    },

    convertToCSV(data) {
      if (!data.length) return "";

      const headers = Object.keys(data[0]);
      const csvContent = [
        headers.join(","),
        ...data.map((row) =>
          headers.map((header) => `"${row[header]}"`).join(",")
        ),
      ].join("\n");

      return csvContent;
    },

    downloadFile(content, filename, contentType) {
      const blob = new Blob([content], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    },

    shareData() {
      if (navigator.share) {
        navigator.share({
          title: "Task Statistics",
          text: `I have completed ${this.taskStore.stats.completed} out of ${this.taskStore.stats.total} tasks!`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        navigator.clipboard.writeText(window.location.href).then(() => {
          Swal.fire({
            icon: "success",
            title: "Link Copied!",
            text: "Statistics link has been copied to clipboard.",
            timer: 2000,
            showConfirmButton: false,
          });
        });
      }
    },

    viewDetails() {
      this.$router.push("/dashboard/tasks");
    },

    printReport() {
      window.print();
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

      // Generate recent activities
      this.generateRecentActivities();
    } catch (error) {
      console.error("Error initializing statistics page:", error);
      Swal.fire({
        icon: "error",
        title: "Error Loading Data",
        text: "Failed to load statistics. Please try again later.",
      });
    }
  },

  async mounted() {
    // Initialize charts after component is mounted
    await this.initializeCharts();
  },

  beforeUnmount() {
    // Clean up charts
    if (this.statusChart) this.statusChart.destroy();
    if (this.categoryChart) this.categoryChart.destroy();
    if (this.trendsChart) this.trendsChart.destroy();
  },

  watch: {
    // Re-render charts when task data changes
    "taskStore.tasks": {
      handler() {
        this.$nextTick(() => {
          this.initializeCharts();
          this.generateRecentActivities();
        });
      },
      deep: true,
    },
  },
};
</script>

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

/* Chart containers */
canvas {
  max-height: 300px;
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

/* Color classes */
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

/* Card hover effects */
.card {
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
}

/* Loading spinner */
.spinner-border {
  width: 3rem;
  height: 3rem;
}

/* Print styles */
@media print {
  .btn-toolbar,
  .dropdown {
    display: none !important;
  }
}
</style>
