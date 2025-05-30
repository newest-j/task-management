<template>
  <div>
    <form>
      <h4 class="fw-bold mb-4">Create your free account</h4>
      <div class="mb-3">
        <label for="fullName" class="form-label">Full Name</label>
        <input
          type="text"
          class="form-control"
          id="fullName"
          placeholder="Enter your name"
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Create a password"
        />
      </div>
      <div class="mb-4">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="termsCheck" />
          <label class="form-check-label" for="termsCheck">
            I agree to the
            <a href="#" class="text-primary">Terms of Service</a>
            and
            <a href="#" class="text-primary">Privacy Policy</a>
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary w-100 py-2 mb-3">
        Create Free Account
      </button>
      <div class="text-center">
        <span class="text-muted small">Or sign up with</span>
        <div class="d-flex justify-content-center gap-2 mt-2">
          <button class="btn btn-outline-secondary px-3">
            <i class="fab fa-google"></i>
          </button>
          <button class="btn btn-outline-secondary px-3">
            <i class="fab fa-github"></i>
          </button>
          <button class="btn btn-outline-secondary px-3">
            <i class="fab fa-microsoft"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
