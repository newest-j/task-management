<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
    >
      <div class="container">
        <router-link
          to="/"
          class="text-decoration-none navbar-brand d-flex align-items-center"
        >
          <i class="fas fa-check-circle text-primary me-2"></i>
          <span class="fw-bold">PulseTasks</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto"></ul>
          <div class="ms-lg-3 mt-3 mt-lg-0 d-flex">
            <router-link
              to="/login"
              class="btn btn-outline-primary me-2 text-decoration-none"
            >
              Log In
            </router-link>
            <router-link
              to="/signup"
              class="btn btn-primary text-white text-decoration-none"
            >
              Sign Up Free
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <div class="mt-5 row g-4 justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div class="card border-0 shadow-lg">
          <div class="card-body p-0">
            <div class="row g-0">
              <div
                class="col-md-5 bg-primary text-white p-4 p-md-5 d-flex flex-column justify-content-center"
              >
                <h3 class="fw-bold mb-3">PulseTasks</h3>
                <p class="mb-4">
                  Everything you need to manage tasks effectively - completely
                  free.
                </p>
                <ul class="list-unstyled mb-4">
                  <li class="mb-3 d-flex align-items-center">
                    <i class="fas fa-check-circle me-2"></i>
                    <span>Unlimited tasks</span>
                  </li>
                  <li class="mb-3 d-flex align-items-center">
                    <i class="fas fa-check-circle me-2"></i>
                    <span>Unlimited projects</span>
                  </li>
                  <li class="mb-3 d-flex align-items-center">
                    <i class="fas fa-check-circle me-2"></i>
                    <span>Team collaboration</span>
                  </li>
                  <li class="mb-3 d-flex align-items-center">
                    <i class="fas fa-check-circle me-2"></i>
                    <span>All core features</span>
                  </li>
                  <li class="d-flex align-items-center">
                    <i class="fas fa-check-circle me-2"></i>
                    <span>Community support</span>
                  </li>
                </ul>
                <div class="mt-auto">
                  <div class="d-flex align-items-center">
                    <div class="d-flex">
                      <img
                        src="https://placehold.co/30x30/ffffff/4f46e5?text=U1"
                        alt="User 1"
                        class="user-avatar-sm"
                      />
                      <img
                        src="https://placehold.co/30x30/ffffff/4f46e5?text=U2"
                        alt="User 2"
                        class="user-avatar-sm"
                        style="margin-left: -8px"
                      />
                      <img
                        src="https://placehold.co/30x30/ffffff/4f46e5?text=U3"
                        alt="User 3"
                        class="user-avatar-sm"
                        style="margin-left: -8px"
                      />
                    </div>
                    <span class="ms-2 small">Join 10,000+ users</span>
                  </div>
                </div>
              </div>
              <div class="col-md-7 p-4 p-md-5">
                <!-- the for comes here -->

                <div class="container mt-5" style="max-width: 400px">
                  <h2 class="text-center mb-4">Log In</h2>
                  <form @submit.prevent="onSubmit">
                    <!-- Email Field -->
                    <div class="mb-3">
                      <label for="email" class="form-label"
                        >Email Address</label
                      >
                      <input
                        v-model="userStore.email"
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter your email"
                        @input="userStore.validateEmail"
                      />
                      <p class="text-danger small">
                        {{ userStore.errors.email }}
                      </p>
                    </div>

                    <!-- Password Field -->
                    <div class="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input
                        v-model="userStore.password"
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter password"
                      />
                      <p class="text-danger small">
                        {{ userStore.errors.password }}
                      </p>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-primary w-100 mb-3">
                      Log In
                    </button>

                    <!-- Optional: Social Logins -->
                    <div class="text-center">
                      <span class="text-muted small">Or login with</span>
                      <div class="d-flex justify-content-center gap-2 mt-2">
                        <button
                          type="button"
                          class="btn btn-outline-secondary px-3"
                        >
                          <i class="fab fa-google"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary px-3"
                        >
                          <i class="fab fa-github"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-secondary px-3"
                        >
                          <i class="fab fa-microsoft"></i>
                        </button>
                      </div>
                    </div>
                  </form>
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

export default {
  data() {
    return {
      userStore: userDetailsStore(),
    };
  },
  methods: {
    async onSubmit() {
      await this.userStore.loginUser(this.$router);
    },
  },
};
</script>

<style scoped></style>
