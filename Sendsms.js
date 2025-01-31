
const twilio = require('twilio');

const accountSid = 'AC59xxxxxxxx'; 
const authToken = '7xxxxxxx';    

const client = twilio(accountSid, authToken);


client.messages
  .create({
    body: 'Hello from ecofleet!',      
    from: '+1xxxxxxx3',              
    to: '+91xxxxxxx'                 // The recipient's phone number
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
