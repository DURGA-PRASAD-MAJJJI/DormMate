import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    image: { type: String, required: true },
    age: { type: Number, required: true },
    profession: { type: String, required: true },
    address: { type: String, required: true },
    floor: { type: Number, required: true },
    room: { type: Number, required: true },
    sharing: { type: String, required: true },
    pay: { type: Boolean, required: true },

});


const memberModel =mongoose.models.members ||  mongoose.model('member',memberSchema)

export default memberModel