
const mongoose = require('mongoose');

const productVariantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: String,
  material: String,
  size: String,
  price: Number,
  inStock: { type: Boolean, default: true },
  image: String
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    category: { type: String, required: true },
    subCategory: String,
    images: [String],
    featured: { type: Boolean, default: false },
    new: { type: Boolean, default: false },
    inStock: { type: Boolean, default: true },
    variants: [productVariantSchema],
    specs: { type: Map, of: String }
  },
  { timestamps: true }
);

// Add text index for search
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
