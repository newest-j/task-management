<template>
  <form @submit.prevent="onSubmit">
    <h4 class="fw-bold mb-4">Create your free account</h4>

    <div class="mb-3">
      <label for="fullName" class="form-label">Full Name</label>
      <input
        v-model="userStore.fullname"
        type="text"
        class="form-control"
        id="fullName"
        placeholder="Enter your name"
        @input="userStore.validateFullname"
      />
      <p class="text-danger">{{ userStore.errors.fullname }}</p>
    </div>

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
      <p class="text-danger">{{ userStore.errors.email }}</p>
    </div>

    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        v-model="userStore.password"
        type="password"
        class="form-control"
        id="password"
        placeholder="Hello123@"
        @input="userStore.validatePassword"
      />
      <p class="text-danger">{{ userStore.errors.password }}</p>
    </div>

    <div class="mb-4">
      <div class="form-check">
        <input
          v-model="userStore.agreeTerms"
          class="form-check-input"
          type="checkbox"
          id="termsCheck"
        />
        <label class="form-check-label" for="termsCheck">
          I agree to the
          <a href="#" class="text-primary">Terms of Service</a>
          and
          <a href="#" class="text-primary">Privacy Policy</a>
        </label>
      </div>
      <p class="text-danger">{{ userStore.errors.terms }}</p>
    </div>

    <button type="submit" class="btn btn-primary w-100 py-2 mb-3">
      Create Free Account
    </button>
  </form>
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
    onSubmit() {
      this.userStore.handleSubmit(this.$router);
    },
  },
};
</script>
