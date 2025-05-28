<template>
  <div>
    <!-- Sidebar -->
    <nav
      class="sidebar bg-dark text-white position-fixed h-100"
      style="width: 250px; z-index: 1000"
    >
      <div class="sidebar-header p-3 border-bottom border-secondary">
        <h4 class="mb-0">
          <i class="bi bi-kanban me-2"></i>
          Task Manager
        </h4>
      </div>
      <ul class="nav flex-column p-3">
        <li class="nav-item mb-2">
          <router-link
            to="/dashboard"
            class="nav-link text-white d-flex align-items-center"
            active-class="bg-primary rounded"
          >
            <i class="bi bi-house-door me-2"></i>
            Home
          </router-link>
        </li>
        <li class="nav-item mb-2">
          <router-link
            to="/dashboard/tasks"
            class="nav-link text-white d-flex align-items-center"
            active-class="bg-primary rounded"
          >
            <i class="bi bi-list-task me-2"></i>
            Tasks
          </router-link>
        </li>
        <li class="nav-item mb-2">
          <router-link
            to="/statistics"
            class="nav-link text-white d-flex align-items-center"
            active-class="bg-primary rounded"
          >
            <i class="bi bi-bar-chart me-2"></i>
            Statistics
          </router-link>
        </li>
        <li class="nav-item mt-auto">
          <router-link
            to="/logout"
            class="nav-link text-white d-flex align-items-center text-danger"
          >
            <i class="bi bi-box-arrow-right me-2"></i>
            Logout
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  top: 0;
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-header {
  background: linear-gradient(135deg, #343a40 0%, #495057 100%);
}
</style>
