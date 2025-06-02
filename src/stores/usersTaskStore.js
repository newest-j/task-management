import { defineStore } from "pinia";
import Swal from "sweetalert2";
const API_BASE_URL = "https://plusetask.onrender.com";

export const userTaskStore = defineStore("userTask", {
  state: () => ({
    // Form data
    taskname: "",
    taskdescription: "",
    taskcategory: "",
    taskduedate: "",

    // Task data
    tasks: [],
    stats: {
      total: 0,
      completed: 0,
      pending: 0,
      overdue: 0,
    },

    // UI state
    loading: false,
    editingTaskId: null,
  }),

  getters: {
    pendingTasks: (state) =>
      state.tasks.filter((task) => task.status === "pending"),
    completedTasks: (state) =>
      state.tasks.filter((task) => task.status === "completed"),
    inProgressTasks: (state) =>
      state.tasks.filter((task) => task.status === "in progress"),
    overdueTasks: (state) => {
      const today = new Date().toISOString().split("T")[0];
      return state.tasks.filter(
        (task) => task.status === "pending" && task.dueDate < today
      );
    },
    recentTasks: (state) => state.tasks.slice(0, 3),
  },

  actions: {
    async loadUserTasks() {
      try {
        this.loading = true;
        const userId = JSON.parse(localStorage.getItem("currentUserId"));

        if (!userId) {
          throw new Error("No user ID found");
        }

        const response = await fetch(`${API_BASE_URL}/users/${userId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();

        // Update store state
        this.tasks = userData.tasks?.all || [];
        this.updateStats();
      } catch (error) {
        console.error("Error loading tasks:", error);
        Swal.fire({
          icon: "error",
          title: "Loading Failed",
          text: "Failed to load tasks",
          toast: true,
          position: "top-end",
          timer: 3000,
          showConfirmButton: false,
        });
      } finally {
        this.loading = false;
      }
    },

    async createTask() {
      try {
        this.loading = true;
        const userId = JSON.parse(localStorage.getItem("currentUserId"));

        if (!userId) {
          throw new Error("No user ID found");
        }

        // Fetch current user data
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const user = await response.json();

        // Generate new task ID
        let maxId = 0;
        if (user.tasks?.all?.length > 0) {
          user.tasks.all.forEach((task) => {
            const numericId = Number.parseInt(task.id, 10);
            if (numericId > maxId) {
              maxId = numericId;
            }
          });
        }
        const nextId = (maxId + 1).toString();

        // Create new task
        const newTask = {
          id: nextId,
          title: this.taskname,
          description: this.taskdescription,
          status: "pending",
          dueDate: this.taskduedate,
          category: this.taskcategory,
          priority: this.taskcategory === "urgent" ? "high" : "medium",
          createdAt: new Date().toISOString().split("T")[0],
        };

        // Initialize tasks structure if it doesn't exist
        if (!user.tasks) {
          user.tasks = { all: [], pending: [], completed: [] };
        }
        if (!user.stats) {
          user.stats = { total: 0, completed: 0, pending: 0, overdue: 0 };
        }

        // Add to user data
        user.tasks.all.push(newTask);
        user.tasks.pending.push(newTask);
        user.stats.total += 1;
        user.stats.pending += 1;

        // Save to server
        const updateResponse = await fetch(`${API_BASE_URL}/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });

        if (!updateResponse.ok) {
          throw new Error("Failed to update user data");
        }

        // Update local store state
        this.tasks.push(newTask);
        this.updateStats();

        // Clear form
        this.clearForm();

        return { success: true, task: newTask };
      } catch (error) {
        console.error("Error creating task:", error);
        return { success: false, error: error.message };
      } finally {
        this.loading = false;
      }
    },

    async completeTask(taskId) {
      try {
        this.loading = true;
        const userId = JSON.parse(localStorage.getItem("currentUserId"));
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        const user = await response.json();

        // Find and update task
        const taskIndex = user.tasks.all.findIndex(
          (task) => task.id === taskId
        );
        if (taskIndex !== -1) {
          user.tasks.all[taskIndex].status = "completed";
          user.tasks.all[taskIndex].completedAt = new Date()
            .toISOString()
            .split("T")[0];

          // Move from pending to completed
          const pendingIndex = user.tasks.pending.findIndex(
            (task) => task.id === taskId
          );
          if (pendingIndex !== -1) {
            const completedTask = user.tasks.pending.splice(pendingIndex, 1)[0];
            completedTask.status = "completed";
            user.tasks.completed.push(completedTask);
          }

          // Update stats
          user.stats.pending -= 1;
          user.stats.completed += 1;

          // Save to server
          await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          // Update local state
          const localTaskIndex = this.tasks.findIndex(
            (task) => task.id === taskId
          );
          if (localTaskIndex !== -1) {
            this.tasks[localTaskIndex].status = "completed";
            this.tasks[localTaskIndex].completedAt = new Date()
              .toISOString()
              .split("T")[0];
          }
          this.updateStats();
        }
      } catch (error) {
        console.error("Error completing task:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async deleteTask(taskId) {
      try {
        this.loading = true;
        const userId = JSON.parse(localStorage.getItem("currentUserId"));
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        const user = await response.json();

        // Remove from all arrays
        const taskIndex = user.tasks.all.findIndex(
          (task) => task.id === taskId
        );
        if (taskIndex !== -1) {
          const task = user.tasks.all[taskIndex];
          user.tasks.all.splice(taskIndex, 1);

          // Remove from status-specific arrays
          if (task.status === "pending") {
            const pendingIndex = user.tasks.pending.findIndex(
              (t) => t.id === taskId
            );
            if (pendingIndex !== -1) user.tasks.pending.splice(pendingIndex, 1);
            user.stats.pending -= 1;
          } else if (task.status === "completed") {
            const completedIndex = user.tasks.completed.findIndex(
              (t) => t.id === taskId
            );
            if (completedIndex !== -1)
              user.tasks.completed.splice(completedIndex, 1);
            user.stats.completed -= 1;
          }

          user.stats.total -= 1;

          // Save to server
          await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          // Update local state
          const localIndex = this.tasks.findIndex((task) => task.id === taskId);
          if (localIndex !== -1) {
            this.tasks.splice(localIndex, 1);
          }
          this.updateStats();
        }
      } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async updateTask(taskId, updatedTask) {
      try {
        this.loading = true;
        const userId = JSON.parse(localStorage.getItem("currentUserId"));
        const response = await fetch(`${API_BASE_URL}/users/${userId}`);
        const user = await response.json();

        // Find and update task
        const taskIndex = user.tasks.all.findIndex(
          (task) => task.id === taskId
        );
        if (taskIndex !== -1) {
          // Update task properties
          Object.assign(user.tasks.all[taskIndex], updatedTask);

          // Update in status-specific arrays
          const pendingIndex = user.tasks.pending.findIndex(
            (t) => t.id === taskId
          );
          const completedIndex = user.tasks.completed.findIndex(
            (t) => t.id === taskId
          );

          // Handle status changes
          if (updatedTask.status === "completed" && pendingIndex !== -1) {
            // Move from pending to completed
            const task = user.tasks.pending.splice(pendingIndex, 1)[0];
            Object.assign(task, updatedTask);
            user.tasks.completed.push(task);
            user.stats.pending -= 1;
            user.stats.completed += 1;
          } else if (
            updatedTask.status === "pending" &&
            completedIndex !== -1
          ) {
            // Move from completed to pending
            const task = user.tasks.completed.splice(completedIndex, 1)[0];
            Object.assign(task, updatedTask);
            user.tasks.pending.push(task);
            user.stats.completed -= 1;
            user.stats.pending += 1;
          }

          // Save to server
          await fetch(`${API_BASE_URL}/users/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          // Update local state
          const localTaskIndex = this.tasks.findIndex(
            (task) => task.id === taskId
          );
          if (localTaskIndex !== -1) {
            Object.assign(this.tasks[localTaskIndex], updatedTask);
          }
          this.updateStats();

          return { success: true };
        }

        return { success: false, error: "Task not found" };
      } catch (error) {
        console.error("Error updating task:", error);
        return { success: false, error: error.message };
      } finally {
        this.loading = false;
      }
    },

    updateStats() {
      this.stats.total = this.tasks.length;
      this.stats.completed = this.tasks.filter(
        (task) => task.status === "completed"
      ).length;
      this.stats.pending = this.tasks.filter(
        (task) => task.status === "pending"
      ).length;

      // Calculate overdue tasks
      const today = new Date().toISOString().split("T")[0];
      this.stats.overdue = this.tasks.filter(
        (task) => task.status === "pending" && task.dueDate < today
      ).length;
    },

    setEditingTask(taskId) {
      this.editingTaskId = taskId;
      const task = this.tasks.find((t) => t.id === taskId);
      if (task) {
        this.taskname = task.title;
        this.taskdescription = task.description;
        this.taskcategory = task.category;
        this.taskduedate = task.dueDate;
      }
    },

    clearForm() {
      this.taskname = "";
      this.taskdescription = "";
      this.taskcategory = "";
      this.taskduedate = "";
      this.editingTaskId = null;
    },
  },
});
