import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  createdAt: Date;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price:{ type: Number, required: true },
  stock:{ type: Number, required: true, default: 0 },
  category: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model<IProduct>('Product', productSchema, 'Products');

export default Product;