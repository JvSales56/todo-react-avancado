# Advanced Todo React

A task management app built with React and Vite. Add tasks with descriptions, track completion, and filter the list by status.

## Features

- Create tasks with a required title and description
- Mark tasks as complete and undo completion
- Delete tasks
- Filter the list to show all, completed, or pending tasks
- Share task and filter state across components with React Context
- Responsive styling with Tailwind CSS

Tasks are stored in React state and are cleared when the page is reloaded.

## Tech stack

- React 19
- Vite 8
- JavaScript (ES modules)
- Tailwind CSS 4
- ESLint

## Prerequisites

- Node.js 20.19+ or 22.12+
- npm

## Getting started

From the project root, install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Available scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## How it works

`TodoProvider` wraps the app and holds the task list and current filter in context. The `useTodos` hook gives components access to that shared state and its actions. `TodoForm` uses the `useInput` hook to manage the title and description fields; submitting creates a task with a unique ID and an incomplete status. `TodoFilters` selects which tasks are displayed, while `TodoList` renders each task using `TodoItem`.

## Project structure

```text
src/
  components/
    TodoFilters.jsx
    TodoForm.jsx
    TodoItem.jsx
    TodoList.jsx
  context/
    TodoContext.jsx
  hooks/
    useInput.jsx
    useTodos.jsx
  style/
    style.css
  App.jsx
  main.jsx
index.html
vite.config.js
```

## Author

João Sales
