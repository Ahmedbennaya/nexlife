
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user.model');
const Product = require('./models/product.model');
const { products } = require('../src/lib/data');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Seed users
const seedUsers = async () => {
  try {
    // Clear existing users
    await User.deleteMany({});

    // Create admin user
    await User.create({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin'
    });

    // Create customer user
    await User.create({
      firstName: 'Customer',
      lastName: 'User',
      email: 'customer@example.com',
      password: 'customer123',
      role: 'customer'
    });

    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

// Seed products
const seedProducts = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});

    // Create products
    await Product.insertMany(products);

    console.log('Products seeded successfully');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

// Run seed functions
const seedDatabase = async () => {
  try {
    await seedUsers();
    await seedProducts();
    console.log('Database seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
