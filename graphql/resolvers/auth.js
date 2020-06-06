const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');

module.exports={
    createUser: async args=>{
        try{
      const exixtingUser=await User.findOne({email:args.userInput.email})
        if(exixtingUser){
          throw new Error('User exist already.')
        }             
        const hashedPassword= await bcrypt.hash(args.userInput.password,12)
        const user = new User({
          email: args.userInput.email,
          password: hashedPassword,
          fullName: args.userInput.fullName
        });
        const result=await user.save();
        return {...result._doc,password:null, _id:result.id};
      }
      catch(err){
          throw err;
      }      
    },
    //same name with root query
    login: async({email,password})=>{
        const user = await User.findOne({email:email});
        if(!user){
            throw new Error('user doesnt exist!');
        }
        const isEqual= await bcrypt.compare(password, user.password);
        if (!isEqual){
            throw new Error('password is incorrect!');
        }
        const token = jwt.sign({userId:user.id, email:user.email}, 'somekey',{
            expiresIn:'1h' 
        });
        return {
            userId: user.id,
            token: token,
            tokenExpiration: 1
        }
    }
};