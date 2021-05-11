import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const basketSchema = new Schema({
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
  comment: {
    type: String,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  orderDate: {
    type: Date,
  },
  status: {
    type: String,
  }
}, {
  timestamps: true,
});

const Basket = mongoose.model('Basket', basketSchema);

export default Basket;
