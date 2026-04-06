# School Library Management API

A RESTful API built with **Node.js, Express.js, MongoDB, and Mongoose** for managing a school library system.

## 🚀 Features

* Author management
* Book management
* Student management
* Library attendant management
* Borrow & return workflow
* Pagination and search for books
* MongoDB population for related entities
* MVC project structure

---

## 🧱 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure (MVC)

```bash
library-system/
│
├── config/
│   └── db.js
├── controllers/
├── models/
├── routes/
├── server.js
├── .env
└── package.json
```

---

## ⚙️ Setup Steps

### 1) Clone repository

```bash
git clone https://github.com/your-username/library-system-api.git
cd library-system-api
```

### 2) Install dependencies

```bash
npm install
```

### 3) Create `.env`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4) Run the server

```bash
npm run dev
```

Server starts on:

```bash
http://localhost:5000
```

---

## 📮 API Documentation (Postman)

Add your Postman collection link here:

**Postman Docs:** [https://documenter.getpostman.com/view/your-collection-id](https://documenter.getpostman.com/view/your-collection-id)

Suggested folders in Postman:

* Authors
* Books
* Students
* Attendants
* Borrow / Return

---

## 📌 Main Endpoints

### Authors

* `POST /authors`
* `GET /authors`
* `GET /authors/:id`
* `PUT /authors/:id`
* `DELETE /authors/:id`

### Books

* `POST /books`
* `GET /books`
* `GET /books/:id`
* `PUT /books/:id`
* `DELETE /books/:id`
* `POST /books/:id/borrow`
* `POST /books/:id/return`

### Students

* `POST /students`
* `GET /students`
* `GET /students/:id`

### Attendants

* `POST /attendants`
* `GET /attendants`

---

## 🔄 Borrow Flow

### Borrow Book

`POST /books/:id/borrow`

```json
{
  "studentId": "student_object_id",
  "attendantId": "attendant_object_id",
  "returnDate": "2026-04-01"
}
```

### Return Book

`POST /books/:id/return`

---

## 👨‍💻 Author

**Your Name**

Backend Developer | Node.js | Express | MongoDB
