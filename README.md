# Task Management App

A modern task management web application built with **Vue 3**, **Bootstrap 5**, **Chart.js**, and a **JSON mock server** for rapid prototyping and development.

---

## Features

- User authentication (signup, login, logout)
- Task CRUD (create, read, update, delete)
- Task categories, priorities, and due dates
- Dashboard with quick stats and recent tasks
- Interactive charts for task statistics (Chart.js)
- Responsive UI with Bootstrap 5
- Mock backend using JSON Server for local development

---

## Tech Stack

- **Vue 3**: Frontend framework (Composition API & Options API)
- **Bootstrap 5**: UI components and responsive layout
- **Chart.js**: Data visualization for statistics
- **JSON Server**: Mock REST API for user and task data

---

## Project Setup

```sh
npm install
```

### Start the JSON Mock Server

This project uses [JSON Server](https://github.com/typicode/json-server) to simulate a backend API.

```sh
npx json-server --watch db.json --port 3000
```

- Make sure `db.json` is in your project root and contains initial user/task data.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

---

## How It Works

- **Vue 3** manages all UI and state logic.
- **Bootstrap 5** is used for layout, forms, and components.
- **Chart.js** displays task statistics (completed, pending, overdue, etc.) in the dashboard.
- **JSON Server** acts as a REST API for users and tasks, enabling full CRUD operations without a real backend.

---

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur).

---

## Customization

- Update `db.json` to change initial data.
- Modify Vue components in `/src` to extend features or UI.
- Charts can be customized in the dashboard component using Chart.js options.

---

## Useful Links

- [Vue 3 Documentation](https://vuejs.org/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
- [JSON Server Docs](https://github.com/typicode/json-server)

---
