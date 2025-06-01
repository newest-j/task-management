import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const userDetailsStore = defineStore("userDetails", {
  state: () => ({
    fullname: "",
    email: "",
    password: "",
    agreeTerms: false,
    errors: {
      fullname: "",
      email: "",
      password: "",
      terms: "",
    },
  }),
  getters: {},
  actions: {
    validateFullname() {
      const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/;
      if (!this.fullname.trim()) {
        this.errors.fullname = "Full name is required";
      } else if (!namePattern.test(this.fullname.trim())) {
        this.errors.fullname =
          "Full name must be at least 2 characters and contain only letters, spaces, hyphens, or apostrophes";
      } else {
        this.errors.fullname = "";
      }
    },

    validateEmail() {
      const emailPattern =
        /^((\+?[0-9\s\-().]{7,})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))$/;
      if (!this.email.trim()) {
        this.errors.email = "Email is required";
      } else if (!emailPattern.test(this.email)) {
        this.errors.email = "Please enter a valid email address";
      } else {
        this.errors.email = "";
      }
    },

    validatePassword() {
      const passwordPattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!this.password) {
        this.errors.password = "Password is required";
      } else if (!passwordPattern.test(this.password)) {
        this.errors.password =
          "Password must be at least 8 characters, include a letter, a number, and a special character";
      } else {
        this.errors.password = "";
      }
    },

    validateTerms() {
      if (!this.agreeTerms) {
        this.errors.terms = "You must agree to the terms";
      } else {
        this.errors.terms = "";
      }
    },

    async createUser(userData, router) {
      try {
        const usersResponse = await fetch("http://localhost:3000/users");
        const users = await usersResponse.json();

        const emailExists = users.some(
          (user) => user.email.toLowerCase() === userData.email.toLowerCase()
        );
        if (emailExists) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email already exists. Please use a different email.",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return;
        }

        const passwordExists = users.some(
          (user) => user.password === userData.password
        );
        if (passwordExists) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title:
              "Password already in use. Please choose a different password.",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return;
        }

        let maxId = 0;
        users.forEach((user) => {
          const numericId = parseInt(user.id, 10);
          if (numericId > maxId) {
            maxId = numericId;
          }
        });
        const nextId = (maxId + 1).toString();

        const newUser = {
          ...userData,
          id: nextId,
          tasks: {
            all: [],
            completed: [],
            pending: [],
            overdue: [],
          },
          stats: {
            total: 0,
            completed: 0,
            pending: 0,
            overdue: 0,
          },
        };

        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (!response.ok) {
          throw new Error("Failed to create user");
        }

        const createdUser = await response.json();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully!",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });

        // Store logged-in user ID after signup
        localStorage.setItem("currentUserId", createdUser.id);

        // Reset form fields after successful creation
        this.fullname = "";
        this.email = "";
        this.password = "";
        this.agreeTerms = false;

        setTimeout(() => {
          if (router) router.push("/dashboard");
        }, 1500);

        return createdUser;
      } catch (error) {
        console.error("Error creating user:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed to create user",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
      }
    },

    async handleSubmit(router) {
      this.validateFullname();
      this.validateEmail();
      this.validatePassword();
      this.validateTerms();

      if (
        !this.errors.fullname &&
        !this.errors.email &&
        !this.errors.password &&
        !this.errors.terms
      ) {
        await this.createUser(
          {
            fullname: this.fullname,
            email: this.email,
            password: this.password,
          },
          router
        );
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Please fix the errors before submitting",
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
      }
    },

    async loginUser(router) {
      try {
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();

        const matchedUser = users.find(
          (user) =>
            user.email.toLowerCase() === this.email.toLowerCase() &&
            user.password === this.password
        );

        if (matchedUser) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successful!",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });

          localStorage.setItem("currentUserId", matchedUser.id);

          setTimeout(() => {
            if (router) router.push("/dashboard");
          }, 1500);

          return matchedUser;
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Invalid email or password",
            showConfirmButton: false,
            timer: 3000,
            toast: true,
          });
          return null;
        }
      } catch (error) {
        console.error("Error logging in:", error);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login failed",
          text: error.message,
          showConfirmButton: false,
          timer: 3000,
          toast: true,
        });
      }
    },

    async loadCurrentUser() {
      try {
        const userId = JSON.parse(localStorage.getItem("currentUserId"));

        if (!userId) {
          return false;
        }

        // Fetch user data from the server
        const response = await fetch(`http://localhost:3000/users/${userId}`);

        if (!response.ok) {
          throw new Error("Failed to load user data");
        }

        const userData = await response.json();

        // Update store with user data
        this.fullname = userData.fullname;
        this.email = userData.email;

        return true;
      } catch (error) {
        console.error("Error loading user data:", error);
        return false;
      }
    },
  },
});
