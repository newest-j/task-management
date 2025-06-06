<template>
  <div>
    <!-- Navigation -->
    <Navbar />

    <!-- Hero Section -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center py-5">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <Motion
              :initial="{ opacity: 0, y: 50 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.8, delay: 0.2 }"
            >
              <h1 class="display-4 fw-bold mb-3">
                Manage Tasks <span class="text-primary">Effortlessly</span>
              </h1>
            </Motion>

            <Motion
              :initial="{ opacity: 0, y: 30 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.8, delay: 0.4 }"
            >
              <p class="lead mb-4">
                PulseTasks helps teams organize, track, and manage their work in
                one place. Boost productivity and achieve your goals with our
                intuitive task management platform.
              </p>
            </Motion>

            <Motion
              :initial="{ opacity: 0, y: 30 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.8, delay: 0.6 }"
            >
              <div class="d-flex flex-wrap gap-2 mb-4">
                <router-link to="/signup">
                  <Motion
                    :whileHover="{ scale: 1.05 }"
                    :whileTap="{ scale: 0.95 }"
                    :transition="{ type: 'spring', stiffness: 400 }"
                  >
                    <button class="btn btn-primary btn-lg px-4">
                      Get Started — It's Free
                    </button>
                  </Motion>
                </router-link>

                <Motion
                  :whileHover="{ scale: 1.05 }"
                  :whileTap="{ scale: 0.95 }"
                  :transition="{ type: 'spring', stiffness: 400 }"
                >
                  <button
                    class="btn btn-outline-dark btn-lg px-4 d-flex align-items-center"
                  >
                    <i class="fas fa-play-circle me-2"></i> Watch Demo
                  </button>
                </Motion>
              </div>
            </Motion>

            <Motion
              :initial="{ opacity: 0, x: -30 }"
              :animate="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.8, delay: 0.8 }"
            >
              <div class="d-flex align-items-center">
                <div class="d-flex">
                  <Motion
                    :initial="{ opacity: 0, scale: 0 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="{
                      duration: 0.5,
                      delay: 1,
                      type: 'spring',
                      stiffness: 300,
                    }"
                  >
                    <img
                      src="https://placehold.co/40x40/4f46e5/white?text=U1"
                      alt="User 1"
                      class="user-avatar"
                      style="z-index: 5"
                    />
                  </Motion>
                  <Motion
                    :initial="{ opacity: 0, scale: 0 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="{
                      duration: 0.5,
                      delay: 1.1,
                      type: 'spring',
                      stiffness: 300,
                    }"
                  >
                    <img
                      src="https://placehold.co/40x40/4f46e5/white?text=U2"
                      alt="User 2"
                      class="user-avatar"
                      style="z-index: 4; margin-left: -10px"
                    />
                  </Motion>
                  <Motion
                    :initial="{ opacity: 0, scale: 0 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="{
                      duration: 0.5,
                      delay: 1.2,
                      type: 'spring',
                      stiffness: 300,
                    }"
                  >
                    <img
                      src="https://placehold.co/40x40/4f46e5/white?text=U3"
                      alt="User 3"
                      class="user-avatar"
                      style="z-index: 3; margin-left: -10px"
                    />
                  </Motion>
                  <Motion
                    :initial="{ opacity: 0, scale: 0 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="{
                      duration: 0.5,
                      delay: 1.3,
                      type: 'spring',
                      stiffness: 300,
                    }"
                  >
                    <img
                      src="https://placehold.co/40x40/4f46e5/white?text=U4"
                      alt="User 4"
                      class="user-avatar"
                      style="z-index: 2; margin-left: -10px"
                    />
                  </Motion>
                </div>
                <div class="ms-3">
                  <div class="d-flex align-items-center">
                    <Motion
                      :initial="{ opacity: 0, rotate: -180 }"
                      :animate="{ opacity: 1, rotate: 0 }"
                      :transition="{
                        duration: 0.6,
                        delay: 1.4,
                        type: 'spring',
                      }"
                    >
                      <i class="fas fa-star text-warning"></i>
                    </Motion>
                    <Motion
                      :initial="{ opacity: 0, rotate: -180 }"
                      :animate="{ opacity: 1, rotate: 0 }"
                      :transition="{
                        duration: 0.6,
                        delay: 1.5,
                        type: 'spring',
                      }"
                    >
                      <i class="fas fa-star text-warning"></i>
                    </Motion>
                    <Motion
                      :initial="{ opacity: 0, rotate: -180 }"
                      :animate="{ opacity: 1, rotate: 0 }"
                      :transition="{
                        duration: 0.6,
                        delay: 1.6,
                        type: 'spring',
                      }"
                    >
                      <i class="fas fa-star text-warning"></i>
                    </Motion>
                    <Motion
                      :initial="{ opacity: 0, rotate: -180 }"
                      :animate="{ opacity: 1, rotate: 0 }"
                      :transition="{
                        duration: 0.6,
                        delay: 1.7,
                        type: 'spring',
                      }"
                    >
                      <i class="fas fa-star text-warning"></i>
                    </Motion>
                    <Motion
                      :initial="{ opacity: 0, rotate: -180 }"
                      :animate="{ opacity: 1, rotate: 0 }"
                      :transition="{
                        duration: 0.6,
                        delay: 1.8,
                        type: 'spring',
                      }"
                    >
                      <i class="fas fa-star text-warning"></i>
                    </Motion>
                    <span class="ms-2 fw-bold">4.9</span>
                  </div>
                  <p class="text-muted mb-0">from 1,000+ reviews</p>
                </div>
              </div>
            </Motion>
          </div>

          <div class="col-lg-6">
            <Motion
              :initial="{ opacity: 0, x: 50, rotate: 5 }"
              :animate="{ opacity: 1, x: 0, rotate: 0 }"
              :transition="{
                duration: 1,
                delay: 0.3,
                type: 'spring',
                stiffness: 100,
              }"
            >
              <div class="hero-image-container">
                <img
                  src="/DashboardImage.png"
                  alt="PulseTasks Dashboard"
                  class="img-fluid hero-image shadow-lg rounded-4"
                />
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-5">
      <div class="container py-4">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <div class="text-center mb-5">
            <h6 class="text-primary fw-bold">FEATURES</h6>
            <h2 class="display-5 fw-bold">
              Everything you need to manage tasks
            </h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px">
              Our platform provides all the tools you need to organize, track,
              and complete your tasks efficiently.
            </p>
          </div>
        </Motion>

        <div class="row g-4">
          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.1,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -10, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <Motion
                    :initial="{ scale: 0, rotate: -180 }"
                    :animate="{ scale: 1, rotate: 0 }"
                    :transition="{
                      duration: 0.5,
                      delay: 0.4,
                      type: 'spring',
                      stiffness: 200,
                    }"
                  >
                    <div class="feature-icon-wrapper mb-3">
                      <i class="fas fa-tasks fa-2x text-primary"></i>
                    </div>
                  </Motion>
                  <h5 class="card-title fw-bold">Task Management</h5>
                  <p class="card-text text-muted">
                    Create, organize, and track tasks with ease. Set priorities,
                    deadlines, and assign tasks to team members.
                  </p>
                </div>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -10, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <Motion
                    :initial="{ scale: 0, rotate: -180 }"
                    :animate="{ scale: 1, rotate: 0 }"
                    :transition="{
                      duration: 0.5,
                      delay: 0.5,
                      type: 'spring',
                      stiffness: 200,
                    }"
                  >
                    <div class="feature-icon-wrapper mb-3">
                      <i class="fas fa-project-diagram fa-2x text-primary"></i>
                    </div>
                  </Motion>
                  <h5 class="card-title fw-bold">Project Organization</h5>
                  <p class="card-text text-muted">
                    Group related tasks into projects. Track progress and manage
                    resources efficiently.
                  </p>
                </div>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.3,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -10, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <Motion
                    :initial="{ scale: 0, rotate: -180 }"
                    :animate="{ scale: 1, rotate: 0 }"
                    :transition="{
                      duration: 0.5,
                      delay: 0.6,
                      type: 'spring',
                      stiffness: 200,
                    }"
                  >
                    <div class="feature-icon-wrapper mb-3">
                      <i class="fas fa-calendar-alt fa-2x text-primary"></i>
                    </div>
                  </Motion>
                  <h5 class="card-title fw-bold">Calendar View</h5>
                  <p class="card-text text-muted">
                    Visualize your tasks and deadlines in a calendar format.
                    Never miss an important date.
                  </p>
                </div>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.4,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -10, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <Motion
                    :initial="{ scale: 0, rotate: -180 }"
                    :animate="{ scale: 1, rotate: 0 }"
                    :transition="{
                      duration: 0.5,
                      delay: 0.7,
                      type: 'spring',
                      stiffness: 200,
                    }"
                  >
                    <div class="feature-icon-wrapper mb-3">
                      <i class="fas fa-chart-line fa-2x text-primary"></i>
                    </div>
                  </Motion>
                  <h5 class="card-title fw-bold">Progress Tracking</h5>
                  <p class="card-text text-muted">
                    Monitor task completion and project progress with visual
                    dashboards and reports.
                  </p>
                </div>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.5,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -10, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <Motion
                    :initial="{ scale: 0, rotate: -180 }"
                    :animate="{ scale: 1, rotate: 0 }"
                    :transition="{
                      duration: 0.5,
                      delay: 0.8,
                      type: 'spring',
                      stiffness: 200,
                    }"
                  >
                    <div class="feature-icon-wrapper mb-3">
                      <i class="fas fa-bell fa-2x text-primary"></i>
                    </div>
                  </Motion>
                  <h5 class="card-title fw-bold">Notifications</h5>
                  <p class="card-text text-muted">
                    Get timely reminders about upcoming deadlines and task
                    assignments.
                  </p>
                </div>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.6,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -10, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <Motion
                    :initial="{ scale: 0, rotate: -180 }"
                    :animate="{ scale: 1, rotate: 0 }"
                    :transition="{
                      duration: 0.5,
                      delay: 0.9,
                      type: 'spring',
                      stiffness: 200,
                    }"
                  >
                    <div class="feature-icon-wrapper mb-3">
                      <i class="fas fa-users fa-2x text-primary"></i>
                    </div>
                  </Motion>
                  <h5 class="card-title fw-bold">Team Collaboration</h5>
                  <p class="card-text text-muted">
                    Work together seamlessly with comments, file sharing, and
                    real-time updates.
                  </p>
                </div>
              </div>
            </Motion>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-5 bg-light">
      <div class="container py-4">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <div class="text-center mb-5">
            <h6 class="text-primary fw-bold">TESTIMONIALS</h6>
            <h2 class="display-5 fw-bold">What our users say</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px">
              Don't just take our word for it. See what our users have to say
              about PulseTasks.
            </p>
          </div>
        </Motion>

        <div class="row g-4">
          <Motion
            :initial="{ opacity: 0, x: -50 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{
              duration: 0.8,
              delay: 0.1,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -5, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.5,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.55,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.6,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.65,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.7,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning"></i>
                      </Motion>
                    </div>
                  </div>
                  <p class="card-text mb-4">
                    "PulseTasks has transformed how our team manages projects.
                    We've increased productivity by 35% since implementing it."
                  </p>
                  <div class="d-flex align-items-center">
                    <Motion
                      :initial="{ scale: 0 }"
                      :animate="{ scale: 1 }"
                      :transition="{
                        duration: 0.5,
                        delay: 0.7,
                        type: 'spring',
                      }"
                    >
                      <img
                        src="https://placehold.co/50x50/4f46e5/white?text=SJ"
                        alt="Sarah Johnson"
                        class="testimonial-avatar me-3"
                      />
                    </Motion>
                    <div>
                      <h6 class="mb-0 fw-bold">Sarah Johnson</h6>
                      <p class="text-muted mb-0 small">
                        Product Manager at TechCorp
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.8,
              delay: 0.3,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -5, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.5,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.55,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.6,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.65,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.7,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning"></i>
                      </Motion>
                    </div>
                  </div>
                  <p class="card-text mb-4">
                    "The intuitive interface and powerful features make
                    PulseTasks the best task management tool we've ever used."
                  </p>
                  <div class="d-flex align-items-center">
                    <Motion
                      :initial="{ scale: 0 }"
                      :animate="{ scale: 1 }"
                      :transition="{
                        duration: 0.5,
                        delay: 0.9,
                        type: 'spring',
                      }"
                    >
                      <img
                        src="https://placehold.co/50x50/4f46e5/white?text=MC"
                        alt="Michael Chen"
                        class="testimonial-avatar me-3"
                      />
                    </Motion>
                    <div>
                      <h6 class="mb-0 fw-bold">Michael Chen</h6>
                      <p class="text-muted mb-0 small">CTO at StartupX</p>
                    </div>
                  </div>
                </div>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, x: 50 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{
              duration: 0.8,
              delay: 0.5,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-6 col-lg-4"
          >
            <Motion
              :whileHover="{ y: -5, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body p-4">
                  <div class="mb-3">
                    <div class="d-flex align-items-center">
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.5,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.55,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.6,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.65,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning me-1"></i>
                      </Motion>
                      <Motion
                        :initial="{ opacity: 0, scale: 0 }"
                        :animate="{ opacity: 1, scale: 1 }"
                        :transition="{
                          duration: 0.3,
                          delay: 0.7,
                          type: 'spring',
                        }"
                      >
                        <i class="fas fa-star text-warning"></i>
                      </Motion>
                    </div>
                  </div>
                  <p class="card-text mb-4">
                    "I've tried many task management tools, but PulseTasks
                    stands out with its simplicity and effectiveness."
                  </p>
                  <div class="d-flex align-items-center">
                    <Motion
                      :initial="{ scale: 0 }"
                      :animate="{ scale: 1 }"
                      :transition="{
                        duration: 0.5,
                        delay: 1.1,
                        type: 'spring',
                      }"
                    >
                      <img
                        src="https://placehold.co/50x50/4f46e5/white?text=ER"
                        alt="Emily Rodriguez"
                        class="testimonial-avatar me-3"
                      />
                    </Motion>
                    <div>
                      <h6 class="mb-0 fw-bold">Emily Rodriguez</h6>
                      <p class="text-muted mb-0 small">Freelance Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </Motion>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Getting Started Section (Replacing Pricing) -->
    <section class="py-5">
      <div class="container py-4">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <div class="text-center mb-5">
            <h6 class="text-primary fw-bold">GET STARTED</h6>
            <h2 class="display-5 fw-bold">Start managing tasks in minutes</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px">
              PulseTasks is completely free to use. No credit card required, no
              hidden fees.
            </p>
          </div>
        </Motion>

        <!-- Why It's Free Section -->
        <div class="row mt-5 pt-4">
          <Motion
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
            class="col-12 text-center mb-4"
          >
            <h3 class="fw-bold">Why PulseTasks is completely free</h3>
            <p class="text-muted mx-auto" style="max-width: 700px">
              We believe that productivity tools should be accessible to
              everyone. Our mission is to help individuals and teams work more
              efficiently.
            </p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.1,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-4 mb-4"
          >
            <Motion
              :whileHover="{ y: -5, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="text-center">
                <Motion
                  :initial="{ scale: 0, rotate: -180 }"
                  :animate="{ scale: 1, rotate: 0 }"
                  :transition="{
                    duration: 0.5,
                    delay: 0.4,
                    type: 'spring',
                    stiffness: 200,
                  }"
                >
                  <div class="feature-icon-wrapper mx-auto mb-3">
                    <i class="fas fa-heart fa-2x text-primary"></i>
                  </div>
                </Motion>
                <h5 class="fw-bold">Community Driven</h5>
                <p class="text-muted">
                  Built with love by a passionate community of developers who
                  believe in open collaboration.
                </p>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.2,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-4 mb-4"
          >
            <Motion
              :whileHover="{ y: -5, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="text-center">
                <Motion
                  :initial="{ scale: 0, rotate: -180 }"
                  :animate="{ scale: 1, rotate: 0 }"
                  :transition="{
                    duration: 0.5,
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 200,
                  }"
                >
                  <div class="feature-icon-wrapper mx-auto mb-3">
                    <i class="fas fa-handshake fa-2x text-primary"></i>
                  </div>
                </Motion>
                <h5 class="fw-bold">No Strings Attached</h5>
                <p class="text-muted">
                  No hidden fees, no credit card required, and no feature
                  limitations. What you see is what you get.
                </p>
              </div>
            </Motion>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{
              duration: 0.6,
              delay: 0.3,
              type: 'spring',
              stiffness: 100,
            }"
            class="col-md-4 mb-4"
          >
            <Motion
              :whileHover="{ y: -5, scale: 1.02 }"
              :transition="{ type: 'spring', stiffness: 300 }"
            >
              <div class="text-center">
                <Motion
                  :initial="{ scale: 0, rotate: -180 }"
                  :animate="{ scale: 1, rotate: 0 }"
                  :transition="{
                    duration: 0.5,
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 200,
                  }"
                >
                  <div class="feature-icon-wrapper mx-auto mb-3">
                    <i class="fas fa-rocket fa-2x text-primary"></i>
                  </div>
                </Motion>
                <h5 class="fw-bold">Constantly Improving</h5>
                <p class="text-muted">
                  We're continuously adding new features and improvements based
                  on user feedback.
                </p>
              </div>
            </Motion>
          </Motion>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-5 bg-light">
      <div class="container py-4">
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8 }"
        >
          <div class="text-center mb-5">
            <h6 class="text-primary fw-bold">FAQ</h6>
            <h2 class="display-5 fw-bold">Frequently Asked Questions</h2>
            <p class="lead text-muted mx-auto" style="max-width: 600px">
              Everything you need to know about PulseTasks
            </p>
          </div>
        </Motion>

        <div class="row justify-content-center">
          <div class="col-lg-8">
            <Motion
              :initial="{ opacity: 0, y: 30 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.8, delay: 0.2 }"
            >
              <div class="accordion" id="faqAccordion">
                <Motion
                  :initial="{ opacity: 0, x: -30 }"
                  :animate="{ opacity: 1, x: 0 }"
                  :transition="{ duration: 0.6, delay: 0.1 }"
                >
                  <div class="accordion-item border-0 mb-3 shadow-sm">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Is PulseTasks really free?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        Yes, PulseTasks is completely free to use. We don't have
                        any paid plans or premium features. All features are
                        available to all users without any limitations.
                      </div>
                    </div>
                  </div>
                </Motion>

                <Motion
                  :initial="{ opacity: 0, x: -30 }"
                  :animate="{ opacity: 1, x: 0 }"
                  :transition="{ duration: 0.6, delay: 0.2 }"
                >
                  <div class="accordion-item border-0 mb-3 shadow-sm">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How do you sustain the platform if it's free?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        PulseTasks is maintained by a passionate community of
                        developers and supported by voluntary contributions. We
                        keep our operational costs low and focus on building a
                        great product that people love to use.
                      </div>
                    </div>
                  </div>
                </Motion>

                <Motion
                  :initial="{ opacity: 0, x: -30 }"
                  :animate="{ opacity: 1, x: 0 }"
                  :transition="{ duration: 0.6, delay: 0.3 }"
                >
                  <div class="accordion-item border-0 mb-3 shadow-sm">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Is there a limit to how many tasks I can create?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        No, there are no limits on the number of tasks,
                        projects, or team members you can have in PulseTasks.
                        Use it as much as you need!
                      </div>
                    </div>
                  </div>
                </Motion>

                <Motion
                  :initial="{ opacity: 0, x: -30 }"
                  :animate="{ opacity: 1, x: 0 }"
                  :transition="{ duration: 0.6, delay: 0.4 }"
                >
                  <div class="accordion-item border-0 mb-3 shadow-sm">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How secure is my data?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        We take security seriously. All data is encrypted in
                        transit and at rest. We follow industry best practices
                        to ensure your information remains private and secure.
                      </div>
                    </div>
                  </div>
                </Motion>

                <Motion
                  :initial="{ opacity: 0, x: -30 }"
                  :animate="{ opacity: 1, x: 0 }"
                  :transition="{ duration: 0.6, delay: 0.5 }"
                >
                  <div class="accordion-item border-0 shadow-sm">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can I contribute to PulseTasks?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div class="accordion-body">
                        PulseTasks is open to contributions from the community.
                        Whether you're a developer, designer, or just have great
                        ideas, we welcome your input. Check out our GitHub
                        repository to get started.
                      </div>
                    </div>
                  </div>
                </Motion>
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container py-4">
        <div class="row align-items-center">
          <Motion
            :initial="{ opacity: 0, x: -50 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8 }"
            class="col-lg-8 mb-4 mb-lg-0"
          >
            <h2 class="display-5 fw-bold">Ready to get started?</h2>
            <p class="lead mb-0">
              Join thousands of users that use PulseTasks to manage their work
              efficiently.
            </p>
          </Motion>
          <Motion
            :initial="{ opacity: 0, x: 50 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
            class="col-lg-4 text-lg-end"
          >
            <router-link to="/signup">
              <Motion
                :whileHover="{ scale: 1.05 }"
                :whileTap="{ scale: 0.95 }"
                :transition="{ type: 'spring', stiffness: 400 }"
              >
                <button class="btn btn-light btn-lg px-4">
                  Create Free Account
                </button>
              </Motion>
            </router-link>
          </Motion>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LoginForm from "@/components/LoginForm.vue";
import SignupForm from "@/components/SignupForm.vue";
import { Motion } from "motion-v";

export default {
  components: {
    Navbar,
    Footer,
    LoginForm,
    SignupForm,
    Motion,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
/* General Styles */
section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.text-primary {
  color: #4f46e5 !important;
}

.bg-primary {
  background-color: #4f46e5 !important;
}

.btn-primary {
  background-color: #4f46e5;
  border-color: #4f46e5;
}

.btn-primary:hover {
  background-color: #4338ca;
  border-color: #4338ca;
}

.btn-outline-primary {
  color: #4f46e5;
  border-color: #4f46e5;
}

.btn-outline-primary:hover {
  background-color: #4f46e5;
  border-color: #4f46e5;
}

/* Hero Section */
.hero-section {
  padding-top: 120px;
  background-color: #f9fafb;
  overflow: hidden;
}

.hero-image {
  border: 8px solid white;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}

.user-avatar-sm {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
}

/* Features Section */
.feature-icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Testimonials Section */
.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

/* Getting Started Section */
.accordion-button:not(.collapsed) {
  background-color: #f3f4ff;
  color: #4f46e5;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(79, 70, 229, 0.25);
}

/* Footer */
.footer-link {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: white;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.3s;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

/* Responsive Adjustments */
@media (max-width: 991.98px) {
  .hero-section {
    padding-top: 100px;
  }
}
</style>
