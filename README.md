# CURRENTLY WORKING ON IT

# 💹 Zerodha Clone

A full-stack clone of [Zerodha](https://zerodha.com), India’s largest stock broker platform, built as a personal project to practice and demonstrate real-world web application development skills.

This project replicates key features of a stock trading platform like user authentication, dashboard, portfolio overview, and simulated buy/sell functionality.

---

## 🚀 Tech Stack

### 🔧 Frontend:
- **React.js** – Frontend UI library
- **React-Bootstrap** – For responsive and styled UI components

### 🛠️ Backend:
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for handling APIs
- **Passport.js** – Authentication middleware

### 🗃️ Database:
- **MongoDB** – NoSQL database for storing user and trading data
- **Mongoose** – ODM for interacting with MongoDB

---

## 📦 Features

- ✅ User Authentication (Register / Login / Logout)  
- ✅ Protected Routes using Passport.js  
- ✅ Dashboard with user profile and portfolio  
- ✅ Buy/Sell Simulation for stocks  
- ✅ Real-time stock updates (mock or API integration)  
- ✅ Responsive and interactive UI using React-Bootstrap  
- ✅ MongoDB-backed persistent data storage  

---

## 🖼️ Screenshots

> _Coming Soon – Add preview images of your app once frontend is complete._

---

## 🛠️ Installation & Run Locally

### Clone the repository

```bash
git clone https://github.com/jatincodes-lab/Zerodha_Clone.git
cd zerodha-clone
```

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

```Dashboard
cd dashboard
npm install
```

### Setup Environment Variables

Create a `.env` file in the `backend` directory with the following:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### Run the App

#### Backend

```bash
cd backend
npm start
```

#### Frontend

```bash
cd frontend
npm run dev
```

#### Dashboard

```bash
cd frontend
npm run dev
```

---

## 🔐 Authentication

- Local strategy using **Passport.js**
- Sessions handled using **express-session**
- Future plan: Add Google OAuth login

---

## ✨ Future Enhancements

- 📈 Integrate real-time stock data API (e.g., Alpha Vantage, Finnhub)
- 📊 Add charts for price movements
- 💼 Simulate historical trades & portfolio value tracking
- 📱 Build mobile responsive UI with Tailwind CSS
- 🌐 OAuth Login (Google / GitHub)

---

## 🙋‍♂️ Author

**Jatin**  
GitHub: [@jatincodes-lab](https://github.com/jatincodes-lab)  
LinkedIn: [linkedin.com/in/jatin-devlop](https://linkedin.com/in/jatin-devlop)

---

## 📃 License

This project is for learning and portfolio purposes. Not for commercial use.
```
