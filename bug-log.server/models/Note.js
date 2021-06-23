
import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const NoteSchema = new Schema({
  body: { type: String, required: true },
  bug: { type: Schema.Types.ObjectId, required: true, ref: 'Bug' },
  creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
})

NoteSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
