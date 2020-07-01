const authResolver = require('./auth') ;
const eventsResolver = require('./events') ;
const bookingResolver = require('./booking') ;
const foodResolver = require('./food') ;
const repastReasolver = require('./repast') ;

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...foodResolver,
  ...repastReasolver
}

module.exports = rootResolver;