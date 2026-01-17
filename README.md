# Angular To-Do List Dashboard

A modern, interactive To-Do List application built with Angular, featuring a clean dashboard, task management, and real-time data persistence using Firebase.

This project is a training exercise demonstrating key Angular concepts including component architecture, state management (via services), forms, Angular Material UI, and Firebase integration for data storage.

## Features

- **Dashboard** displaying a list of tasks with columns:
  - Task name/title
  - Assigned to (person)
  - Due date
  - Priority level (High / Medium / Low)
  - State (started/ In progress..)
- **Header actions**:
  - **Add Task** → opens a popup dialog with form
  - **Fetch Tasks** → reloads tasks from Firebase
  - **Clear List** → removes all tasks 
- **Task actions**:
  - Delete task
  - Update/Edit task (opens same form)
  - Detail page (not implemented yet)
- **Add/Edit Task Dialog** (Angular Material Dialog):
  - Title (required)
  - Description
  - Assigned To
  - Due Date (date picker)
  - Priority (dropdown: High, Medium, Low)
  - State (started/ In progress..)
  - Create/Update button
- Real-time data sync with **Firebase** (Realtime Database or Firestore)
- Form validation

## Technologies Used

- Angular 18+ (standalone components)
- Angular Material (tables, forms, datepicker, buttons, select, snackbar)
- Firebase (Realtime Database / Firestore for CRUD operations)
- TypeScript


## Installation & Run Locally

```bash
# Clone the repository
git clone https://github.com/HadjerMegoura/angularHttp.git

# Go to project directory
cd todo-list-dashboard

# Install dependencies
npm install

# Start development server
ng serve
