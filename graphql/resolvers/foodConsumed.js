const FoodConsumed = require('../../models/food_consumed');
const User = require('../../models/user');
const {transformEvent} = require('./merge');

module.exports={
    foodConsumed: async () => {
        try{
            const foodConsumed= await FoodConsumed.find()
        return foodConsumed
        .map(foodConsumed=>{
          return transformEvent(foodConsumed);
        });
        }catch(err){
        throw err;
      }
    },
    createFoodConsumed: async (args,req) => {
      const foodConsumed = new FoodConsumed({
        date: new Date(args.eventInput.date),
        userId:req.userId,
        foodId:req.foodId,
        repast:req.repastId
      });
      let createdFoodConsumed;
      try{
        const result= await foodConsumed.save();
        createdFoodConsumed= transformEvent(result);
        const userId = await User.findById(req.userId)
        if(!userId){
          throw new Error('User not found.');
        }
        userId.createdFoodConsumed.push(event);
        await userId.save();
        return createdFoodConsumed;
    }catch(err){
        throw err;
      }
    }
};