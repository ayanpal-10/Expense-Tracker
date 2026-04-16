# Expense-Tracker
# 💰 ExpensePro – Web-Based Expense Tracker

ExpensePro is a full-stack web application designed to help users manage their personal finances by tracking income and expenses in real time. It provides a clean and intuitive interface along with powerful features like data visualization and transaction management.

---

## 🚀 Features

* ➕ Add income and expense transactions
* 📊 Real-time balance calculation
* 🧾 Transaction history with delete option
* 📉 Income vs Expense donut chart
* 📅 Monthly expense breakdown
* 🔍 Filter transactions by type
* 🔄 RESTful API for seamless data handling

---

## 🛠️ Tech Stack

**Frontend:**

* HTML
* CSS
* JavaScript

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (with Mongoose)

---

## 📂 Project Structure

```
ExpensePro/
│── public/          # Frontend files (HTML, CSS, JS)
│── models/          # Mongoose schemas
│── routes/          # API routes
│── controllers/     # Business logic
│── server.js        # Entry point
│── package.json     # Dependencies
```

---

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/expense-tracker.git
```

2. Navigate to project folder:

```bash
cd expense-tracker
```

3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open in browser:

```
http://localhost:3000
```

---

## 🌐 API Endpoints

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /transactions     | Get all transactions |
| POST   | /transactions     | Add new transaction  |
| DELETE | /transactions/:id | Delete transaction   |

---

## 📸 Screenshots

*Add your project screenshots here (dashboard, charts, etc.)*

---

## 📌 Future Enhancements

* 🔐 User authentication (Login/Signup)
* ☁️ Cloud deployment
* 📱 Mobile responsiveness improvements
* 📊 Advanced analytics and reports
