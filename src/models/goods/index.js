import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const goodsSchema = new Schema({
  goodsId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  existence: {
    type: Boolean,
    required: true,
  },
  type: {
    type: Array,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Goods = mongoose.model('Goods', goodsSchema);

export default Goods;
