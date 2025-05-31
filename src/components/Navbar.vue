<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
    >
      <div class="container">
        <a class="navbar-brand d-flex align-items-center">
          <i class="fas fa-check-circle text-primary me-2"></i>
          <span class="fw-bold">TaskFlow</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#create-account">Create Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">Testimonials</a>
            </li>
          </ul>
          <div class="ms-lg-3 mt-3 mt-lg-0 d-flex">
            <li
              type="button"
              class="btn btn-outline-primary me-2"
              @click="$emit('change-form', 'login')"
            >
              <a class="text-decoration-none" href="#create-account"> Log In</a>
            </li>

            <li
              type="button"
              class="btn btn-primary"
              @click="$emit('change-form', 'signup')"
            >
              <a class="text-white text-decoration-none" href="#create-account">
                Sign Up Free</a
              >
            </li>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  emits: ["change-form"],
};
</script>

<style lang="scss" scoped></style>
