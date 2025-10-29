# 🛒 Advanced React E-Commerce Web App

A modern, fully-featured e-commerce web application built with React, TypeScript, and Redux.

![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![Redux](https://img.shields.io/badge/Redux%20Toolkit-2.9.2-purple?logo=redux)
![React Query](https://img.shields.io/badge/React%20Query-5.90.5-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-purple?logo=bootstrap)
![Vite](https://img.shields.io/badge/Vite-7.1.7-green?logo=vite)

## 🌟 Features

### 🏪 Core E-commerce Functionality
- **Product Catalog**: Browse products with category filtering
- **Shopping Cart**: Add, remove, and modify product quantities
- **Checkout Process**: Complete simulated purchase flow
- **Session Persistence**: Cart data persists across browser sessions
- **Real Product Data**: Integration with FakeStore API

### 🎨 User Interface
- **Modern UI Components**: Clean, professional interface
- **Interactive Carousel**: Hero section with promotional content
- **Product Cards**: Detailed product information with ratings
- **Loading States**: Smooth user experience with loading indicators

### ⚡ Advanced Features
- **State Management**: Redux Toolkit for global state
- **Data Fetching**: React Query for server state management
- **TypeScript**: Full type safety throughout the application
- **Custom Hooks**: Reusable logic with custom React hooks
- **Modal Confirmations**: User-friendly confirmation dialogs
- **Error Handling**: Comprehensive error management
- **Image Fallbacks**: Graceful handling of broken product images

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Cart.tsx
│   ├── CartItem.tsx
│   ├── HomePage.tsx
│   ├── NavBar.tsx
│   ├── Product.tsx
│   ├── ProductList.tsx
│   ├── CheckoutSuccessModal.tsx
│   └── ConfirmationModal.tsx
├── hooks/
│   └── useProducts.ts
├── redux/
│   ├── store.ts
│   ├── cartSlice.ts
│   └── hooks.ts
├── services/
│   └── productService.ts
├── types/
│   └── types.ts
└── styles/
    ├── cart.css
    ├── home-page.css
    ├── navbar.css
    └── product.css
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DhanushkaChandimal/Advanced-React-E-Commerce-Web-App.git
   cd Advanced-React-E-Commerce-Web-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📋 Key Components

### 🏠 HomePage
- Hero carousel with promotional content
- Featured products section

### 🛍️ ProductList
- Category-based product filtering
- Grid layout with product cards

### 🛒 Cart Management
- Add/remove products with quantity controls
- Session storage persistence
- Price calculations with tax
- Modern UI with confirmation modals

### 💳 Checkout Process
- Simulated checkout flow
- Order confirmation with generated order numbers
- Cart clearing after successful purchase
- Success modal with order details
