<template>
  <div class="container mt-5" style="max-width: 400px">
    <h2 class="text-center mb-4">Log In</h2>
    <form @submit.prevent="onSubmit">
      <!-- Email Field -->
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input
          v-model="userStore.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter your email"
          @input="userStore.validateEmail"
        />
        <p class="text-danger small">{{ userStore.errors.email }}</p>
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
        <p class="text-danger small">{{ userStore.errors.password }}</p>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-primary w-100 mb-3">Log In</button>

      <!-- Optional: Social Logins -->
      <div class="text-center">
        <span class="text-muted small">Or login with</span>
        <div class="d-flex justify-content-center gap-2 mt-2">
          <button type="button" class="btn btn-outline-secondary px-3">
            <i class="fab fa-google"></i>
          </button>
          <button type="button" class="btn btn-outline-secondary px-3">
            <i class="fab fa-github"></i>
          </button>
          <button type="button" class="btn btn-outline-secondary px-3">
            <i class="fab fa-microsoft"></i>
          </button>
        </div>
      </div>
    </form>
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
