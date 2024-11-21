const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true,
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled', 'ready', 'accepted', 'delivered'],
    default: 'pending',
  },
  totalPrice: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
