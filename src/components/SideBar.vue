<template>
  <div>
    <nav
      class="sidebar d-none d-md-block bg-dark text-white position-fixed h-100"
      style="width: 250px; z-index: 1"
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
            to="/dashboard/statistics"
            class="nav-link text-white d-flex align-items-center"
            active-class="bg-primary rounded"
          >
            <i class="bi bi-bar-chart me-2"></i>
            Statistics
          </router-link>
        </li>
        <li class="nav-item mt-auto">
          <button
            @click="logout"
            class="nav-link text-white d-flex align-items-center text-danger"
          >
            <i class="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </li>
      </ul>
    </nav>

    <div
      class="offcanvas offcanvas-end text-bg-dark"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
          <i class="bi bi-kanban me-2"></i>Task Manager
        </h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div class="offcanvas-body">
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
              to="/dashboard/statistics"
              class="nav-link text-white d-flex align-items-center"
              active-class="bg-primary rounded"
            >
              <i class="bi bi-bar-chart me-2"></i>
              Statistics
            </router-link>
          </li>
          <li class="nav-item mt-auto">
            <button
              @click="logout"
              class="nav-link text-white d-flex align-items-center text-danger"
            >
              <i class="bi bi-box-arrow-right me-2"></i>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Offcanvas from "./Offcanvas.vue";
import Swal from "sweetalert2"; // Import SweetAlert

export default {
  components: { Offcanvas },
  data() {
    return {};
  },
  methods: {
    logout() {
      const userId = JSON.parse(localStorage.getItem("currentUserId"));
      if (userId) {
        // Show confirmation dialog
        Swal.fire({
          title: "Logout Confirmation",
          text: "Are you sure you want to log out?",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, logout",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            // Remove user ID from localStorage
            localStorage.removeItem("currentUserId");

            // Show success message
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Logged out successfully!",
              showConfirmButton: false,
              timer: 1500,
              toast: true,
            });

            // Navigate to landing page
            this.$router.push("/");
          }
        });
      } else {
        // If no user ID found, just redirect
        this.$router.push("/");
      }
    },
  },
};
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

.nav-link {
  transition: all 0.3s ease;
  border-radius: 0.375rem;
  margin-bottom: 0.25rem;
  text-decoration: none;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  transform: translateX(5px);
  color: white !important;
}

.nav-link.router-link-active,
.nav-link.bg-primary {
  background: linear-gradient(135deg, #0d6efd 0%, #0b5ed7 100%) !important;
  color: white !important;
}
</style>
