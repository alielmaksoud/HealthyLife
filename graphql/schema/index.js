const {buildSchema}= require("graphql");

module.exports=buildSchema(`
type Booking{
    _id:ID!
    event:Event!
    user:User!
    createdAt:String!
    updatedAt:String!
}

type Event {
    _id:ID!
    title:String!
    description:String!
    price:Float!
    date: String!
    creator:User!
}

type User {
  _id:ID!
  email: String!
  password: String
  fullName: String
  createdEvents:[Event!]
}

type UserInformation {
    _id:ID!
    heihgt:Float!
    weight:Float!
    age:Float!
    gender:String!
    calorie:Float!
    user:User!
}

type Food {
    _id:ID!
    description:String!
    name:String!
    quantity:Float!
    servingSize:String!
    calories:Float!
    fat:Float!
    protein:Float!
    carbs:Float!
    fiber:Float!
    sugar:Float!
}

type Repast {
    _id:ID!
    name:String!
}

type KaloriTakip {
    _id: ID!
    date:String!
    repast:Repast!
    food:Food!
    user:User!
}

type FoodConsumed {
    date:String!
    userId:User!
    food:[Food!]
    repastId:Repast!
}
type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
}

input EventInput {
    title:String!
    description:String!
    price:Float!
    date: String!
}

input UserInformationInput {
    heihgt:Float!
    weight:Float!
    age:Float!
    gender:String!
    calorie:Float!
}

input UserInput{
  email: String!
  password:String!
  fullName:String!
}

input FoodInput {
    name:String!
    description:String!
    quantity:Float!
    servingSize:String!
    calories:Float!
    fat:Float!
    protein:Float!
    carbs:Float!
    fiber:Float!
    sugar:Float!
}

input RepastInput {
    name:String!
}

input KaloriTakipInput {
    date:String!
}

input FoodConsumedInput {
    date:String!
}

type RootQuery{
    events:[Event!]!
    bookings:[Booking!]!
    users:[User!]!
    usersInformation:[UserInformation!]!
    foods:[Food!]!
    repast:[Repast!]!
    kaloriTakip:[KaloriTakip!]!
    foodConsumed:[FoodConsumed!]!
    login(email: String!, password: String!): AuthData!
}

type RootMutation{
    createEvent(eventInput: EventInput):Event
    createUser(userInput: UserInput):User 
    createUserInformation(userInformationInput: UserInformationInput):UserInformation 
    createFood(foodInput: FoodInput):Food 
    createFoodConsumed(foodConsumedInput: FoodConsumedInput):FoodConsumed 
    createRepast(repastInput: RepastInput):Repast 
    bookEvent(eventId: ID!):Booking!
    cancelBooking(bookingId: ID!):Event
}
schema{
    query: RootQuery
    mutation: RootMutation
}
`);