const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type: String, unique: true, trim: true, required:[true,'Name must be require']},
    email: {type: String, unique: true, trim: true, required:[true,'Email must be require']},
    password: {type: String, unique: true, trim: true, required:[true,'Name must be require'],minlength:[6,'Password must be at least 6 characters']},
},{timestamps: true})

const User = mongoose.model('User', userSchema);

module.exports = User;