const Food = require('../../models/food');
const {transformFood} = require('./merge');

module.exports={
    foods: async () => {
        try{
            const foods= await Food.find()
        return foods
        .map(food=>{
          return transformFood(food);
        });
    }catch(err){
        throw err;
      }
    },
    createFood: async (args,req) => {
      const food = new Food({
        name: args.foodInput.name,
        description: args.foodInput.description,
        quantity: +args.foodInput.quantity,
        servingSize: args.foodInput.servingSize,
        calories: +args.foodInput.calories,
        fat: +args.foodInput.fat,
        protein: +args.foodInput.protein,
        carbs: +args.foodInput.carbs,
        fiber: +args.foodInput.fiber,
        sugar: +args.foodInput.sugar,
      });
      let createdFood;
      try{
        const result= await food.save();
        createdFood= transformFood(result);
        return createdFood;
    }catch(err){
        throw err;
      }
    }
};