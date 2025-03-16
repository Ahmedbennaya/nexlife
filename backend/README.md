
# Bargaoui Rideaux Backend API

This is the backend API for the Bargaoui Rideaux e-commerce website.

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/bargaoui_rideaux
   JWT_SECRET=your_jwt_secret_key_change_this_in_production
   JWT_EXPIRES_IN=7d
   ```

3. Seed the database with initial data:
   ```
   npm run seed
   ```

4. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/profile` - Get user profile (requires authentication)
- `PUT /api/auth/profile` - Update user profile (requires authentication)

### Products

- `GET /api/products` - Get all products (supports filtering)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/new` - Get new products
- `GET /api/products/category/:category` - Get products by category
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/products` - Create a new product (admin only)
- `PUT /api/products/:id` - Update a product (admin only)
- `DELETE /api/products/:id` - Delete a product (admin only)

### Orders

- `POST /api/orders` - Create a new order (requires authentication)
- `GET /api/orders` - Get all orders (admin only)
- `GET /api/orders/myorders` - Get user's orders (requires authentication)
- `GET /api/orders/:id` - Get a single order by ID (requires authentication)
- `PUT /api/orders/:id/pay` - Update order to paid (requires authentication)
- `PUT /api/orders/:id/status` - Update order status (admin only)

### Users

- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get a single user by ID (admin only)
- `PUT /api/users/:id` - Update a user (admin only)
- `DELETE /api/users/:id` - Delete a user (admin only)
