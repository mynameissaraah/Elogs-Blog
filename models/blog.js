const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const BlogModel = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
   },
     description: {
      type: String},
     author: {
      type : String,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
     },
     state: {
      type: String,
      default: 'draft',
      enum: ['draft', 'published'],
    },
    read_count: {
      type: Number,
      default: 0,
    },
    reading_time: Number,
    tags: [String],
    body: String,
  },
  { timestamps: true }
)



  
  module.exports = mongoose.model('Blog',BlogModel)

  