import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  stock: number;
  category: string;
  createdAt: Date;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: [true, 'O campo name é obrigatório'] },
  description: { type: String },
  price: { type: Number, required: [true, 'O campo price é obrigatório'] },
  stock: { type: Number, required: [true, 'O campo stock é obrigatório'], default: 0 },
  category: { type: String, required: [true, 'O campo category é obrigatório'] },
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model<IProduct>('Product', productSchema, 'Products');

export default Product;