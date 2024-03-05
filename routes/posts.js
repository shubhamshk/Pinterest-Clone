const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
  },
  image:{
    type:String
}, 

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Use the string 'User' here
  },
  
  currentDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports  = mongoose.model('Post', PostSchema);
