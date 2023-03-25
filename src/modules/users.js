import mongoose from"mongoose"
const {Schema} = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        require: true,
        minlength : 3,
    }, 
    username: {
        type :String,
        require: true

    },
    email: String,
    phone: Number,
})

export default mongoose.model("users",userSchema);