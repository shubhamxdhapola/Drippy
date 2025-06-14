# 🛍️ Drippy - Full Stack eCommerce Web Application

Drippy is a full-featured eCommerce platform built with the MERN stack. Users can browse products, search and filter, add to cart, and complete secure purchases through PayPal or sign in using Google. Admins can manage users, products, and orders through a dedicated admin panel.

---

## 🚀 Features

### 🧑‍💼 User Features:

* User authentication with **JWT and Google OAuth (via Firebase)**
* Browse and search products
* Filter products by category, price, etc.
* **Paginated product listing** for better performance
* Add products to cart
* Place orders with PayPal integration
* View order history and details

### 🔧 Admin Features:

* Admin dashboard with revenue and order stats
* Manage users: view, delete, **update user role (Customer/Admin)**
* Manage products: update, delete
* Manage orders: update delivery status
* View sales statistics and metrics

---

## 🛠️ Tech Stack

### Frontend

* **React.js**
* **Redux** – State management
* **DaisyUI** – Tailwind CSS-based UI components

### Backend

* **Node.js**
* **Express.js**
* **MongoDB** – Database
* **JWT** – Authentication
* **Firebase Admin SDK** – Google OAuth support

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/shubhamxdhapola/Drippy
cd drippy
```

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

---

## 🔐 Environment Variables

### 📂 Backend `.env`

Create a `.env` file in the `backend` directory and add the following:

```env
PORT=your_backend_port
MONGO_ATLAS_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
ORIGIN=your_frontend_origin_url

# Firebase Admin SDK for Google OAuth
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY_ID=your_firebase_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_firebase_private_key_here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_CLIENT_ID=your_firebase_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_CERT_URL=your_firebase_client_cert_url
```

### 📂 Frontend `.env`

Create a `.env` file in the `frontend` directory and add the following:

```env
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
VITE_BACKEND_URL=your_backend_base_url

# Firebase Web Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
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

---

## ✨ Future Enhancements

* Product reviews and ratings
* Coupon/discount system
* Wishlist functionality
* Email notifications for orders
* Admin activity logs and audit trail

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork and improve the project.

---

## 📃 License

This project is licensed under the MIT License.

---
