
const twilio = require('twilio');

const accountSid = 'AC5999f48e92da6b428d8f5f8f96dfaf89'; 
const authToken = '79b07cd0c9c6900f8ed2a669bb5d4a01';    

const client = twilio(accountSid, authToken);


client.messages
  .create({
    body: 'Hello from ecofleet!',      
    from: '+12512202603',              
    to: '+918865037375'                 // The recipient's phone number
  })
  .then(message => console.log(`Message sent with SID: ${message.sid}`))
  .catch(error => console.error(error));

  
  
  
  //...................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
  
  
  // # require('dotenv').config();

// # const accountSid = process.env.TWILIO_ACCOUNT_SID;
// # const authToken = process.env.TWILIO_AUTH_TOKEN;
// # const client = require("twilio")(accountSid , authToken);

// # const sendmsg = async (body) => {
// #     let msgOption = {
// #         from: process.env.TWILIO_FROM_NUMBER,
// #          to: process.env.TO_NUMBER,
// #          body,
// #     };
// #     try{
// #         const message = await client.message.create(msgOption);
// #         console.log(message);
// #     }
// #     catch (err){
// #         console.log(err);
// #     }
// # };
// # sendmsg("hello welecome to the ecofleet");
