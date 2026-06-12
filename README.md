<div align="center">

# 💼 Jobster

### Track your job search journey — beautifully and efficiently.

<br/>

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-000000?style=for-the-badge&logoColor=white)](https://jobster-react-app.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

<br/>

![JavaScript](https://img.shields.io/badge/JavaScript-81.6%25-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-16.1%25-1572B6?style=flat-square&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-2.3%25-E34F26?style=flat-square&logo=html5&logoColor=white)

</div>

---

## 📖 About

**Jobster** is a full-featured **job application tracker** built with React. It helps users organize their job hunt by logging applications, monitoring their status (pending, interview, declined), and visualizing progress through interactive charts and statistics.

The app includes a complete **authentication flow**, a **dynamic dashboard**, **CRUD operations** for job entries, and a **stats page** with beautiful data visualizations — all wrapped in a smooth, animated UI.

> 🎯 Based on the classic "Jobster" project architecture (React + Redux Toolkit pattern), this version has been customized and rebuilt with React 19 and modern tooling.

---

## ✨ Features

### 🔐 Authentication
- User **Register** & **Login** pages
- **Demo / Guest login** to explore the app without creating an account
- Persisted authentication state (stays logged in across sessions)
- Protected routes — dashboard pages are inaccessible without login

### 🏠 Landing Page
- Eye-catching hero section introducing the app
- Direct call-to-action buttons to Login / Register

### 📊 Dashboard
- **Shared Layout** with a responsive **Navbar** and collapsible **Sidebar**
- **Big Sidebar** (desktop) & **Small Sidebar** (mobile) for adaptive navigation
- User dropdown menu with **Logout** functionality
- **Light / Dark theme toggle** 🌗

### ➕ Add Job
- Form to log a new job application
- Fields for **position, company, job location, job type, and status**
- Real-time form validation

### 📋 All Jobs
- View a complete list of all submitted job applications as **job cards**
- **Search & filter** jobs by status, type, and search term
- **Sort** jobs by date or other criteria
- **Edit** or **Delete** any job entry directly from the card

### 📈 Stats
- Numerical overview cards (Pending, Interview, Declined)
- **Interactive bar & area charts** (powered by Recharts) showing monthly application trends
- Visual breakdown of job search progress over time

### 👤 Profile
- View and update personal user information (name, email, last name)

### 🔔 Notifications
- Toast notifications (via React Toastify) for actions like login, job creation, updates, and errors

### 🎬 Animations
- Smooth page and component transitions powered by **Framer Motion**

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Library** | [React 19](https://react.dev) |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org) + React-Redux |
| **Routing** | [React Router DOM v7](https://reactrouter.com) |
| **Styling** | [Styled Components](https://styled-components.com) + [normalize.css](https://necolas.github.io/normalize.css/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Charts** | [Recharts](https://recharts.org) |
| **HTTP Client** | [Axios](https://axios-http.com) |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) |
| **Date Handling** | [Moment.js](https://momentjs.com) |
| **Build Tool** | [Create React App](https://create-react-app.dev) (react-scripts) |
| **Testing** | React Testing Library + Jest DOM |
| **Deployment** | [Vercel](https://vercel.com) |

---

## 🗂️ Project Structure

```
jobster-react-app/
├── public/                  # Static assets (favicon, index.html, manifest)
├── src/
│   ├── assets/               # Images, icons, styled wrappers
│   ├── components/            # Reusable UI components
│   │   ├── Navbar
│   │   ├── BigSidebar / SmallSidebar
│   │   ├── Logo
│   │   ├── FormRow
│   │   ├── JobsContainer / Job
│   │   ├── ChartsContainer
│   │   ├── StatsContainer
│   │   └── ...
│   ├── features/              # Redux slices (auth, job, user, allJobs)
│   │   ├── user/
│   │   ├── job/
│   │   ├── allJobs/
│   │   └── ...
│   ├── pages/                  # Route-level pages
│   │   ├── Landing
│   │   ├── Register
│   │   ├── Error
│   │   └── dashboard/
│   │       ├── SharedLayout
│   │       ├── AddJob
│   │       ├── AllJobs
│   │       ├── Stats
│   │       └── Profile
│   ├── utils/                  # Axios instance, helper functions
│   ├── App.js                  # Routes definition
│   └── index.js                # App entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Mohamed-samy0/jobster-react-app.git
cd jobster-react-app

# Install dependencies
npm install
```

### Run the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads automatically on changes.

### Build for Production

```bash
npm run build
```

Builds an optimized, minified production bundle into the `build/` folder.

### Run Tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

---

## 🧪 Available Scripts

| Script | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run eject` | Ejects CRA configuration (one-way operation) |

---

## 🌐 Live Demo

🔗 **[jobster.mohamedsamy.engineer](jobster.mohamedsamy.engineer)**

Try the **Demo / Guest login** on the login page to explore all dashboard features instantly — no account needed!

---

## 🗺️ Routes Overview

| Route | Page | Access |
|---|---|---|
| `/landing` | Landing page | Public |
| `/register` | Register / Login | Public |
| `/` | Dashboard → Stats | Protected |
| `/all-jobs` | All Jobs | Protected |
| `/add-job` | Add Job | Protected |
| `/profile` | Profile | Protected |
| `*` | 404 Error page | Public |

---

<div align="center">

**Built with ❤️ by [Mohamed Samy](https://github.com/Mohamed-samy0)**

*If you found this project useful, give it a ⭐!*

</div>
