import { Schema, Types, model } from 'mongoose';

interface Transaction {
  id?: String,
  buyerID: Types.ObjectId;
  buyerAddressID: Types.ObjectId;
  artworkID: Types.ObjectId;
  artistID: Types.ObjectId;
  artistAddressID: Types.ObjectId;
  total: Number,
  status: String
}
 
const TransactionSchema = new Schema<Transaction>({
  id: String,
  buyerID: { type: Schema.Types.ObjectId, ref:'User', required: true },
  buyerAddressID: { type: Schema.Types.ObjectId, ref:'Address', required: true },
  artworkID: { type: Schema.Types.ObjectId, ref:'Artwork', required: true },
  artistID: { type: Schema.Types.ObjectId, ref:'Artist', required: true },
  artistAddressID: { type: Schema.Types.ObjectId, ref:'Address', required: true },
  total: { type: Number, required: true },
  status: { type: String, required: true },
})
 
const Transaction = model<Transaction>('transaction', TransactionSchema);

export default Transaction;