const Event = require('../../models/events');
const Booking =require('../../models/booking');
const {transformBooking, transformEvent} = require('./merge');

  module.exports={
    bookings:async()=>{
      try{
        //get all book database
        const bookings =await Booking.find();
        return bookings.map(booking=>{
            return transformBooking(bookings);        
        });
      }
      catch (err){
        throw err;
      }

    },
    //resolver name
    bookEvent: async args=>{
      const fetchedEvent=await Event.findOne({_id:args.eventId})
      const booking =new Booking({
        user:'5ebc27f08bf9805084caff27',
        event:fetchedEvent

      });
      const result =await booking.save();
      return transformBooking(result);
    },
    //same name moutaition
    cancelBooking: async args=>{
      try{
        const booking = await Booking.findById(args.bookingId).populate('event');
        const event= transformEvent(booking.event);
        await Booking.deleteOne({_id:args.bookingId});
        return event;

      }catch (err){
        throw err;
      }
    }
};