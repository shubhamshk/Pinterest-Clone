const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shk")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
  },
  posts: [{
    type :mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, // Assuming the profile picture is stored as a URL
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
});

userSchema.plugin(plm);

module.exports= mongoose.model('User', userSchema);

