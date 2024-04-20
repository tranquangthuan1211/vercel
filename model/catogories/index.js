const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Categories = new Schema({
  name: {type:String, required:true},
}, {timestamps: true});

module.exports = mongoose.model("Categories",Categories)