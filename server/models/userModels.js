const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({

    name:{
        type: String,
        trim:true,
        required : "Name is required"
    },
    email:{
        type: String,
        trim:true,
        required : "Email is required",
        unique: true
    },

    password :{
        type:String , 
        required: true,
        min:6,
        max:64
    },

    stripe_account_id : "" ,
    stripe_seller :{},
    stripeSession : {}

},{timestamps:true})

/**
 * @description will hash the password any time a user register
 * It's like a middleware
 */
userSchema.pre('save' , function(next){

    let user = this 

    if(user.isModified('password')) {
        return bcrypt.hash(user.password , 12 , function(err, hash){
           if(err) {
               console.log("Bcrypt hashed error" , err)
               return next(err)
           }
           user.password = hash ;
           return next()
        })
    }else{
        return next()
    }

})

/**
 * @returns match password or error
 * @param {password} password 
 * @param {next} next 
 */
userSchema.methods.comparePassword = function(password , next) {

    bcrypt.compare(password , this.password , function(err , match){
        if(err){
            console.log("password do not match" , err)
            return next(err , false)
        }
        return next(null , match)
    })
}


module.exports =  mongoose.model('User' , userSchema)