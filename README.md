# 🛍️ Drippy - Full Stack eCommerce Web Application

Drippy is a full-featured eCommerce platform built with the MERN stack. Users can browse products, search and filter, add to cart, and complete secure purchases through PayPal. Admins can manage users, products, and orders through a dedicated admin panel.

## 🚀 Features

### 🧑‍💼 User Features:
- User authentication with JWT
- Browse and search products
- Filter products by category, price, etc.
- Add products to cart
- Place orders with PayPal integration
- View order history and details

### 🔧 Admin Features:
- Admin dashboard with revenue and order stats
- Manage users: view, delete, **update user role (Customer/Admin)**
- Manage products: update, delete
- Manage orders: update delivery status
- View sales statistics and metrics

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- **Redux** – State management
- **DaisyUI** – Tailwind CSS-based UI components

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** – Database
- **JWT** – Authentication
---

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/shubhamxdhapola/Drippy
cd drippy
````

### 2. Install dependencies

#### For the frontend:

```bash
cd frontend
npm install
```

#### For the backend:

```bash
cd backend
npm install
```

### 3. Environment Variables

Create `.env` files in both `frontend` and `backend` directories.

#### Backend `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ORIGIN=your_frontend_url
```

#### Frontend `.env`

```env
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
```

---

## ▶️ Run the app

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm start
```

---

## 📁 Folder Structure

```
drippy/
├── frontend/
│   ├── src/
│   └── ...
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
└── README.md
```

## ✨ Future Enhancements

* Product reviews and ratings
* Coupon/discount system
* Wishlist functionality
* Email notifications for orders

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork and improve the project.

---

## 📃 License

This project is licensed under the MIT License.

---
