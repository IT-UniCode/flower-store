import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const basketSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
    },
    goods: {
      type: Array,
    },
    price: {
      type: Number,
    },
    address: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    fullName: {
      type: String,
      trim: true,
    },
    comment: {
      type: String,
      trim: true,
    },
    orderDate: {
      type: Date,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Basket = mongoose.model('Basket', basketSchema);

export default Basket;
