<template>
  <div>
    <Motion
      :initial="{ y: -100, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ duration: 0.6, type: 'spring', stiffness: 100 }"
    >
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
      >
        <div class="container">
          <Motion
            :whileHover="{ scale: 1.05 }"
            :whileTap="{ scale: 0.95 }"
            :transition="{ type: 'spring', stiffness: 400 }"
          >
            <a class="navbar-brand d-flex align-items-center">
              <Motion
                :initial="{ rotate: -180, scale: 0 }"
                :animate="{ rotate: 0, scale: 1 }"
                :transition="{
                  duration: 0.8,
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 200,
                }"
                :whileHover="{ rotate: 360 }"
              >
                <i class="fas fa-check-circle text-primary me-2"></i>
              </Motion>
              <Motion
                :initial="{ x: -20, opacity: 0 }"
                :animate="{ x: 0, opacity: 1 }"
                :transition="{ duration: 0.6, delay: 0.4 }"
              >
                <span class="fw-bold">PulseTasks</span>
              </Motion>
            </a>
          </Motion>

          <!-- Toggle button positioned correctly -->
          <Motion
            :whileHover="{ scale: 1.1 }"
            :whileTap="{ scale: 0.9 }"
            :transition="{ type: 'spring', stiffness: 400 }"
          >
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </Motion>

          <Motion
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 0.6, delay: 0.5 }"
          >
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <Motion
                  :initial="{ y: -20, opacity: 0 }"
                  :animate="{ y: 0, opacity: 1 }"
                  :transition="{ duration: 0.5, delay: 0.6 }"
                >
                  <li class="nav-item">
                    <Motion
                      :whileHover="{ y: -2, scale: 1.05 }"
                      :transition="{ type: 'spring', stiffness: 300 }"
                    >
                      <a class="nav-link" href="#features">Features</a>
                    </Motion>
                  </li>
                </Motion>

                <Motion
                  :initial="{ y: -20, opacity: 0 }"
                  :animate="{ y: 0, opacity: 1 }"
                  :transition="{ duration: 0.5, delay: 0.7 }"
                >
                  <li class="nav-item">
                    <Motion
                      :whileHover="{ y: -2, scale: 1.05 }"
                      :transition="{ type: 'spring', stiffness: 300 }"
                    >
                      <a class="nav-link" href="#testimonials">Testimonials</a>
                    </Motion>
                  </li>
                </Motion>
              </ul>

              <Motion
                :initial="{ x: 50, opacity: 0 }"
                :animate="{ x: 0, opacity: 1 }"
                :transition="{ duration: 0.6, delay: 0.8 }"
              >
                <div class="ms-lg-3 mt-3 mt-lg-0 d-flex">
                  <router-link to="/login" class="text-decoration-none">
                    <Motion
                      :whileHover="{ scale: 1.05, y: -2 }"
                      :whileTap="{ scale: 0.95 }"
                      :transition="{ type: 'spring', stiffness: 400 }"
                    >
                      <button class="btn btn-outline-primary me-2">
                        Log In
                      </button>
                    </Motion>
                  </router-link>

                  <router-link to="/signup" class="text-decoration-none">
                    <Motion
                      :whileHover="{ scale: 1.05, y: -2 }"
                      :whileTap="{ scale: 0.95 }"
                      :transition="{ type: 'spring', stiffness: 400 }"
                    >
                      <button class="btn btn-primary text-white">
                        Sign Up Free
                      </button>
                    </Motion>
                  </router-link>
                </div>
              </Motion>
            </div>
          </Motion>
        </div>
      </nav>
    </Motion>
  </div>
</template>

<script>
import { Motion } from "motion-v";

export default {
  components: {
    Motion,
  },
};
</script>
