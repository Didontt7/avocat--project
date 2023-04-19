const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    Fullname:String,
    username: String,
    email: String,
    password: String,
    address:String,
    phone:String,
    Description:String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;