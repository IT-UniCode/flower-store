import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const { Schema } = mongoose;

const connection = mongoose.createConnection('mongodb+srv://Admin:VrnWdzLyyCp3nCCE@cluster0.5ub4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

autoIncrement.initialize(connection);

const basketSchema = new Schema(
  {
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

basketSchema.plugin(autoIncrement.plugin, 'Basket');

const Basket = mongoose.model('Basket', basketSchema);

export default Basket;
