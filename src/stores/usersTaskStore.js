import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const userTaskStore = defineStore("userTask", {
  state: () => ({
    taskname: "",
    taskdescription: "",
    taskcategory: "",
    taskduedate: "",
  }),
  getters: {},
  actions: {},
});
