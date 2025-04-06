import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    image: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true }
});


const userModel =mongoose.models.members ||  mongoose.model('member',userSchema)

export default userModel