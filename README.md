Here’s a complete **README.md** for your **Real-Time Collaborative Kanban Board** project:

---

# 📝 Collaborative Real-Time Kanban Board

A full-stack **real-time collaborative Kanban board** where multiple users can create, edit, assign, move, and delete tasks with live updates using **WebSockets**. Built with **React, Node.js, Express, MongoDB, and Socket.IO**.

## 🌐 Live Demo

Frontend: [https://todo-frontend-your-link.vercel.app](https://todo-frontend-ten-roan.vercel.app/)
Backend: [https://todo-backend-your-link.onrender.com](https://realtime-todo-app.onrender.com)
Demo Video : https://drive.google.com/file/d/1G7BwUYS0qeWP_1TqCIB6UdhG1PpL9dVV/view?usp=sharing
---
🔑 Test Account (Demo Credentials)
You can use the following credentials to test the app without creating a new account:

Email: 1234@1234
Password: 90909090

✅ You can create, edit, move, delete tasks
✅ Activity log updates in real-time
✅ Multiple users can log in simultaneously


## 🚀 Features

✅ Real-time task creation, editing, and deletion
✅ Drag-and-drop Kanban board with status updates
✅ Smart Assign functionality (auto-assign task to available user)
✅ Activity log showing team actions
✅ User Authentication (Register, Login, Logout)
✅ Socket.IO live sync across all users
✅ Beautiful animated UI with **Framer Motion**
✅ Responsive and mobile-friendly

---

## 🛠 Tech Stack

| Frontend | Backend           | Database      | Real-time |
| -------- | ----------------- | ------------- | --------- |
| React.js | Node.js + Express | MongoDB Atlas | Socket.IO |

---

## 📂 Folder Structure

```
├── client (React Frontend)
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   └── api
│   └── public
└── server (Express + Socket.IO Backend)
    ├── controllers
    ├── models
    ├── routes
    └── server.js
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/your-username/collaborative-kanban-board.git
cd collaborative-kanban-board
```

---

### 2. Backend Setup (`/server`)

```bash
cd server
npm install
```

* Create `.env` file in `/server`:

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

* Run backend:

```bash
npm start
```

---

### 3. Frontend Setup (`/client`)

```bash
cd ../client
npm install
```

* Create `.env` file in `/client`:

```
REACT_APP_API_URL=https://your-backend-deployed-url.onrender.com/api
```

* Run frontend:

```bash
npm start
```

---

## 🔑 User Roles

* Any registered user can:

  * Create tasks
  * Edit tasks
  * Delete tasks
  * Move tasks between columns
  * View activity log
* Real-time updates are instant across all users.

---


## ⚡ Key Highlights

* **Drag & Drop:** Powered by `react-beautiful-dnd`
* **Real-Time:** Bi-directional live updates using `Socket.IO`
* **JWT Auth:** Secure user authentication with `jsonwebtoken`
* **Smart Assign:** One-click intelligent task assignment
* **Activity Log:** See who did what and when
* **Modern UI:** Responsive, animated, clean design

---

## 🛡️ Future Improvements

* Add user profile pictures (avatars)
* Add due dates & priorities
* Add team chat or comments on tasks
* Role-based permissions (Admin/User)
* Export activity logs to CSV/PDF

---

## 👨‍💻 Author

**Suyash Pathak**

* LinkedIn: [linkedin.com/in/suyashpathak](www.linkedin.com/in/suyash-pathak-4347b5283)
* Portfolio: [your-portfolio-link.com](https://suyashpathak-portfolio.netlify.app/)

---

## 🌟 Show Your Support

If you like this project, please ⭐ star the repo and share your feedback!

---

