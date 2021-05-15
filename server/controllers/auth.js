const User = require('../models/userModels')
const jwt = require('jsonwebtoken')
 

/**
 * @param {request} req 
 * @param {response} res 
 * @returns registered user
 */
const register = async (req, res) => {
    
    //destructure
   const {name , email , password} = req.body;

   //validation
   if(!name) return res.status(400).send('Name is required');
   if(!password || password.length < 6 ){
       return res.status(400).send("Password is required and must be at least 6 characters long")
   }
   
   // Check for Existing user
   const existUser = await User.findOne({email}).exec()
   if(existUser){
       return res.status(400).send("Email is already taken")
   }
 
   // create the user
   const user = new User(req.body)
   try {
       await user.save()
       return res.status(201).json({ok : true})
   } catch (error) {
       console.log("Create user failed" , error)
       return res.status(400).send('Error try again')
   }

}

/**
 * @param {request} req 
 * @param {response} res 
 */

const login = async(req, res) => {
    const {email , password} = req.body
    try {
        
        // check for the user in db
        let user = await User.findOne({email}).exec() ;
        if(!user) res.status(400).send("No user found with that email")

        // verify match password
        user.comparePassword(password , (err, match)  => {
            if(!match || err) {
               return  res.status(400).send("Wrong password")
            }
            // generate token
            let token =  jwt.sign({_id : user._id} , process.env.JWT_SECRET , {expiresIn: '1d'})

            res.json({
                token , 
                user: {
                    _id : user._id,
                    name: user.name , 
                    email : user.email,
                    createdAt: user.createdAt,
                    updatedAt : user.updatedAt

                }});
        })
    } catch (error) {
        console.log("loggin error" , error)
        res.status(400).send('Signin failed')
    }
}

module.exports = ({ register , login})










