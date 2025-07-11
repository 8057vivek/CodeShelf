<p align="center">
  <img src="./53391d1a-7fc9-4c56-ad26-1233fa24bb47.png" height="120" />
</p>

<h1 align="center">📚 CodeShelf - The Ultimate eBook Store</h1>

<p align="center">
  <a href="https://codebookshelf.netlify.app/"><img src="https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=netlify" /></a>
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-blue?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Backend-JSON%20Server-brightgreen?style=for-the-badge&logo=json" />
  <img src="https://img.shields.io/badge/Auth-JSON%20Auth-orange?style=for-the-badge&logo=auth0" />
</p>

---

## 🚀 Project Overview

**CodeShelf** is a modern and responsive **eBook shopping platform** built using **React** and **Tailwind CSS**, supported by a **mock backend using JSON Server**. It provides users with the ability to **browse**, **search**, **add to cart**, **place orders**, and view their **order history**.

🔗 [Visit Live Site »](https://codebookshelf.netlify.app/)

---

## ✨ Features at a Glance

✅ **Home Page**  
- Hero section with call to action  
- Highlights of featured eBooks  
- “Best Seller” badge & rating system  

✅ **Product Listings**  
- List of all books with pagination  
- Each book includes: image, title, price, stars, and Add to Cart

✅ **Search Functionality** 🔍  
- Search bar filters books in real-time by title  

✅ **Cart System** 🛒  
- Add/remove books from cart  
- Total cart amount  
- Proceed to checkout  

✅ **Authentication** 🔐  
- Simple Login / Signup system  
- Login as **Guest** available to explore quickly  
> **Username:** `guest@codeshelf.com`  
> **Password:** `123456`

✅ **Order Gateway**  
- Order now button creates a new order  
- Order History page for logged-in users  

✅ **Mobile Responsive** 📱  
- Smooth layout on phones, tablets & desktops  

---

## 📸 Screenshots

<details>
<summary>📌 Click to Expand</summary>

### 🖥️ Home Page & Featured Books

<img src="./53391d1a-7fc9-4c56-ad26-1233fa24bb47.png" alt="Home Page" width="100%"/>

### 📚 All eBooks Page

<img src="./1357289e-0e5c-437f-95e3-6310ff646d53.png" alt="Books Page" width="100%"/>

</details>

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/JSON_Server-333?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
</p>

---

## 📁 Folder Structure (Simplified)

```
CodeShelf/
├── public/
├── src/
│ ├── components/ # Navbar, Footer, Cards
│ ├── pages/ # Home, Products, Orders, Login
│ ├── context/ # Global state with React Context
│ ├── services/ # API handlers for books, orders
│ └── App.jsx
├── db.json # Fake backend using JSON Server
├── package.json
└── tailwind.config.js
```


---

## 🧪 Getting Started

### Prerequisites

- Node.js installed
- JSON Server (`npm install -g json-server`)

### Run Locally

```bash
# Clone the project
git clone https://github.com/your-username/codeshelf

# Install dependencies
npm install

# Run fake backend
json-server --watch db.json --port 5000

# Start React app
npm start
