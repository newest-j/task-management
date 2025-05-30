<template>
  <div>
    <form>
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
          placeholder="Enter Password"
        />
      </div>

      <button type="submit" class="btn btn-primary w-100 py-2 mb-3">
        LogIn
      </button>
      <div class="text-center">
        <span class="text-muted small">Login With</span>
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

<style scoped></style>
