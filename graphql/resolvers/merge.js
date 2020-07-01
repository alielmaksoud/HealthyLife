const DataLoader = require('dataloader');

const Event = require('../../models/events');
const Food = require('../../models/food');
const User = require('../../models/user');
const Repast = require('../../models/repast');

const {dateToString} = require('../../helpers/date');

const eventLoader = new DataLoader(eventIds => {
  return events(eventIds);
});

const foodLoader = new DataLoader(foodIds => {
  return foods(foodIds);
});

const userLoader = new DataLoader(userIds => {
  return User.find({_id: {$in: userIds}});
});

const events = async eventIds => {
  try {
    const events = await Event.find({ _id: { $in: eventIds } });
    events.sort((a, b) => {
      return (
        eventIds.indexOf(a._id.toString()) - eventIds.indexOf(b._id.toString())
      );
    });
    return events.map(event => {
      return transformEvent(event);
    });
  } catch (err) {
    throw err;
  }
};

const foods = async foodIds => {
  try {
    const foods = await Food.find({ _id: { $in: foodIds } });
    foods.sort((a, b) => {
      return (
        foodIds.indexOf(a._id.toString()) - foodIds.indexOf(b._id.toString())
      );
    });
    return foods.map(food => {
      return transformFood(food);
    });
  } catch (err) {
    throw err;
  }
};

const repasts = async repastIds => {
  try {
    const repasts = await Repast.find({ _id: { $in: repastIds } });
    repasts.sort((a, b) => {
      return (
        repastIds.indexOf(a._id.toString()) - repastIds.indexOf(b._id.toString())
      );
    });
    return repasts.map(food => {
      return transformRepast(food);
    });
  } catch (err) {
    throw err;
  }
};

const singleEvent = async eventId => {
  try {
    const event = await eventLoader.load(eventId.toString());
    return event;
  } catch (err) {
    throw err;
  }
};

const user = async userId => {
  try {
    const user = await userLoader.load(userId.toString());
    return {
      ...user._doc,
      _id: user.id,
      createdEvents: () => eventLoader.loadMany(user._doc.createdEvents)
    };
  } catch (err) {
    throw err;
  }
};
const food = async foodId => {
  try {
    const food = await foodLoader.load(foodId.toString());
    return {
      ...food._doc,
      _id: food.id,
      createdFoodC: () => eventLoader.loadMany(user._doc.createdEvents)
    };
  } catch (err) {
    throw err;
  }
};

  const transformEvent = event =>{
    return {
      ...event._doc,
      _id:event.id,
      date: dateToString(event._doc.date),
      creator:user.bind(this,event.creator)  
    };
  };
  const transformFoodConsumed = foodConsumed =>{
    return {
      ...foodConsumed._doc,
      _id:foodConsumed.id,
      date: dateToString(event._doc.date),
      userId:user.bind(this,event.creator),
      foodId:user.bind(this,event.creator),
      repastId:user.bind(this,event.creator),
    };
  };

  const transformUserInformation = userInformation =>{
    return {
      ...userInformation._doc,
      _id:userInformation.id,
      user:user.bind(this,userInformation._doc.user),

    };
  };

  
  const transformRepast = repast =>{
    return {
      ...repast._doc,
      _id:repast.id, 
    };
  };

  const transformFood = food =>{
    return {
      ...food._doc,
      _id:food.id,
    };
  };

const transformBooking = booking =>{
  return{
    ...booking._doc,
    _id:booking.id,
    user:user.bind(this,booking._doc.user),
    event:singleEvent.bind(this,booking._doc.event),
    createdAt:dateToString(booking._doc.createdAt),
    updatedAt:dateToString(booking._doc.updatedAt)
  }
}

exports.transformBooking = transformBooking;
exports.transformEvent = transformEvent;
exports.transformFood = transformFood;
exports.transformRepast = transformRepast;
exports.transformUserInformation = transformUserInformation;
  

 // exports.user=user;
 // exports.events=events;
 // exports.singleEvent=singleEvent;