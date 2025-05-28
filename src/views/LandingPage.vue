<template>
  <div>
    <!-- Navigation -->
    <Navbar />
    <!-- Hero Section -->
    <section class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center py-5">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1 class="display-4 fw-bold mb-3">
              Manage Tasks <span class="text-primary">Effortlessly</span>
            </h1>
            <p class="lead mb-4">
              TaskFlow helps teams organize, track, and manage their work in one
              place. Boost productivity and achieve your goals with our
              intuitive task management platform.
            </p>
            <div class="d-flex flex-wrap gap-2 mb-4">
              <button class="btn btn-primary btn-lg px-4">
                Get Started — It's Free
              </button>
              <button
                class="btn btn-outline-dark btn-lg px-4 d-flex align-items-center"
              >
                <i class="fas fa-play-circle me-2"></i> Watch Demo
              </button>
            </div>
            <div class="d-flex align-items-center">
              <div class="d-flex">
                <img
                  src="https://placehold.co/40x40/4f46e5/white?text=U1"
                  alt="User 1"
                  class="user-avatar"
                  style="z-index: 5"
                />
                <img
                  src="https://placehold.co/40x40/4f46e5/white?text=U2"
                  alt="User 2"
                  class="user-avatar"
                  style="z-index: 4; margin-left: -10px"
                />
                <img
                  src="https://placehold.co/40x40/4f46e5/white?text=U3"
                  alt="User 3"
                  class="user-avatar"
                  style="z-index: 3; margin-left: -10px"
                />
                <img
                  src="https://placehold.co/40x40/4f46e5/white?text=U4"
                  alt="User 4"
                  class="user-avatar"
                  style="z-index: 2; margin-left: -10px"
                />
              </div>
              <div class="ms-3">
                <div class="d-flex align-items-center">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <span class="ms-2 fw-bold">4.9</span>
                </div>
                <p class="text-muted mb-0">from 1,000+ reviews</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero-image-container">
              <img
                src="https://placehold.co/600x400/4f46e5/white?text=TaskFlow+Dashboard"
                alt="TaskFlow Dashboard"
                class="img-fluid hero-image shadow-lg rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <h6 class="text-primary fw-bold">FEATURES</h6>
          <h2 class="display-5 fw-bold">Everything you need to manage tasks</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            Our platform provides all the tools you need to organize, track, and
            complete your tasks efficiently.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="feature-icon-wrapper mb-3">
                  <i class="fas fa-tasks fa-2x text-primary"></i>
                </div>
                <h5 class="card-title fw-bold">Task Management</h5>
                <p class="card-text text-muted">
                  Create, organize, and track tasks with ease. Set priorities,
                  deadlines, and assign tasks to team members.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="feature-icon-wrapper mb-3">
                  <i class="fas fa-project-diagram fa-2x text-primary"></i>
                </div>
                <h5 class="card-title fw-bold">Project Organization</h5>
                <p class="card-text text-muted">
                  Group related tasks into projects. Track progress and manage
                  resources efficiently.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="feature-icon-wrapper mb-3">
                  <i class="fas fa-calendar-alt fa-2x text-primary"></i>
                </div>
                <h5 class="card-title fw-bold">Calendar View</h5>
                <p class="card-text text-muted">
                  Visualize your tasks and deadlines in a calendar format. Never
                  miss an important date.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="feature-icon-wrapper mb-3">
                  <i class="fas fa-chart-line fa-2x text-primary"></i>
                </div>
                <h5 class="card-title fw-bold">Progress Tracking</h5>
                <p class="card-text text-muted">
                  Monitor task completion and project progress with visual
                  dashboards and reports.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="feature-icon-wrapper mb-3">
                  <i class="fas fa-bell fa-2x text-primary"></i>
                </div>
                <h5 class="card-title fw-bold">Notifications</h5>
                <p class="card-text text-muted">
                  Get timely reminders about upcoming deadlines and task
                  assignments.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="feature-icon-wrapper mb-3">
                  <i class="fas fa-users fa-2x text-primary"></i>
                </div>
                <h5 class="card-title fw-bold">Team Collaboration</h5>
                <p class="card-text text-muted">
                  Work together seamlessly with comments, file sharing, and
                  real-time updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-5 bg-light">
      <div class="container py-4">
        <div class="text-center mb-5">
          <h6 class="text-primary fw-bold">TESTIMONIALS</h6>
          <h2 class="display-5 fw-bold">What our users say</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            Don't just take our word for it. See what our users have to say
            about TaskFlow.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text mb-4">
                  "TaskFlow has transformed how our team manages projects. We've
                  increased productivity by 35% since implementing it."
                </p>
                <div class="d-flex align-items-center">
                  <img
                    src="https://placehold.co/50x50/4f46e5/white?text=SJ"
                    alt="Sarah Johnson"
                    class="testimonial-avatar me-3"
                  />
                  <div>
                    <h6 class="mb-0 fw-bold">Sarah Johnson</h6>
                    <p class="text-muted mb-0 small">
                      Product Manager at TechCorp
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text mb-4">
                  "The intuitive interface and powerful features make TaskFlow
                  the best task management tool we've ever used."
                </p>
                <div class="d-flex align-items-center">
                  <img
                    src="https://placehold.co/50x50/4f46e5/white?text=MC"
                    alt="Michael Chen"
                    class="testimonial-avatar me-3"
                  />
                  <div>
                    <h6 class="mb-0 fw-bold">Michael Chen</h6>
                    <p class="text-muted mb-0 small">CTO at StartupX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <div class="mb-3">
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                  <i class="fas fa-star text-warning"></i>
                </div>
                <p class="card-text mb-4">
                  "I've tried many task management tools, but TaskFlow stands
                  out with its simplicity and effectiveness."
                </p>
                <div class="d-flex align-items-center">
                  <img
                    src="https://placehold.co/50x50/4f46e5/white?text=ER"
                    alt="Emily Rodriguez"
                    class="testimonial-avatar me-3"
                  />
                  <div>
                    <h6 class="mb-0 fw-bold">Emily Rodriguez</h6>
                    <p class="text-muted mb-0 small">Freelance Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-5">
      <div class="container py-4">
        <div class="text-center mb-5">
          <h6 class="text-primary fw-bold">PRICING</h6>
          <h2 class="display-5 fw-bold">Choose your plan</h2>
          <p class="lead text-muted mx-auto" style="max-width: 600px">
            We offer flexible pricing options to fit your needs. Start free and
            upgrade as you grow.
          </p>
          <div class="d-flex justify-content-center mt-4">
            <div class="form-check form-switch form-check-inline">
              <label class="form-check-label text-primary fw-bold"
                >Monthly</label
              >
              <input class="form-check-input mx-3" type="checkbox" />
              <label class="form-check-label">
                Annual <span class="badge bg-primary ms-1">Save 20%</span>
              </label>
            </div>
          </div>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h5 class="fw-bold">Free</h5>
                <div class="pricing-amount">
                  <span class="currency">$</span>
                  <span class="amount">0</span>
                  <span class="period">/month</span>
                </div>
                <p class="text-muted mb-4">
                  Perfect for individuals and small projects
                </p>
                <ul class="list-unstyled mb-4">
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Up to 5 projects
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Basic task management
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Calendar view
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    1 team member
                  </li>
                </ul>
                <button class="btn w-100 btn-outline-primary">
                  Start Free
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm popular-plan">
              <div class="card-body p-4">
                <div class="popular-badge">Most Popular</div>
                <h5 class="fw-bold">Pro</h5>
                <div class="pricing-amount">
                  <span class="currency">$</span>
                  <span class="amount">12</span>
                  <span class="period">/month</span>
                </div>
                <p class="text-muted mb-4">
                  Ideal for growing teams and businesses
                </p>
                <ul class="list-unstyled mb-4">
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Unlimited projects
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Advanced task management
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Team collaboration
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Priority support
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Up to 10 team members
                  </li>
                </ul>
                <button class="btn w-100 btn-primary">Start Pro Trial</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body p-4">
                <h5 class="fw-bold">Enterprise</h5>
                <div class="pricing-amount">
                  <span class="currency">$</span>
                  <span class="amount">29</span>
                  <span class="period">/month</span>
                </div>
                <p class="text-muted mb-4">
                  For large organizations with complex needs
                </p>
                <ul class="list-unstyled mb-4">
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Everything in Pro
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Advanced security
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Custom integrations
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Dedicated support
                  </li>
                  <li class="mb-2">
                    <i class="fas fa-check text-success me-2"></i>
                    Unlimited team members
                  </li>
                </ul>
                <button class="btn w-100 btn-outline-primary">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-5 bg-primary text-white">
      <div class="container py-4">
        <div class="row align-items-center">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <h2 class="display-5 fw-bold">Ready to get started?</h2>
            <p class="lead mb-0">
              Join thousands of teams that use TaskFlow to manage their work
              efficiently.
            </p>
          </div>
          <div class="col-lg-4 text-lg-end">
            <button class="btn btn-light btn-lg px-4">
              Start Your Free Trial
            </button>
          </div>
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
export default {
  components: {
    Navbar,
    Footer,
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

/* Pricing Section */
.pricing-amount {
  margin: 20px 0;
}

.currency {
  font-size: 20px;
  font-weight: bold;
  vertical-align: top;
  position: relative;
  top: 8px;
}

.amount {
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
}

.period {
  color: #6b7280;
  font-size: 16px;
}

.popular-plan {
  transform: scale(1.05);
  border: 2px solid #4f46e5 !important;
  position: relative;
}

.popular-badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: #4f46e5;
  color: white;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
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

  .popular-plan {
    transform: scale(1);
  }
}
</style>
