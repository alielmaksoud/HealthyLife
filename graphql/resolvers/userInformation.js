const Repast = require('../../models/repast');
const { transformRepast } = require('./merge');

module.exports={
    repasts: async () => {
        try{
            const repasts= await Repast.find()
        return repasts
        .map(repast=>{
          return transformRepast(repast);
        });
    }catch(err){
        throw err;
      }
    },
    createRepast: async (args,req) => {
      const repast = new Repast({
        name: args.repastInput.name,

      });
      let createdRepast;
      try{
        const result= await repast.save();
        createdRepast= transformRepast(result);
        return createdRepast;
    }catch(err){
        throw err;
      }
    }
};