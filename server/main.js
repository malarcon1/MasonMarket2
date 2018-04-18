import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';

// random comment
//Resolutions = new Mongo.Collection('resolutions');

Meteor.startup(() => {


//      process.env.MAIL_URL = "smtp://postmaster@sandboxa49634e118e44b50bccf99a45000d56b.mailgun.org:725f48281cab4e9ec7130b8913aa0822-21e977f8-cbb3af54@smtp.mailgun.org:587";


});
Meteor.methods({
registerUser: function(email, number, password){
	 console.log(email);
	      Accounts.createUser({
            email: email,
            number: number,
            password: password
        });
}
});

Meteor.methods({ // sends email via gmail
    'createPlayer': function(){
process.env.MAIL_URL="smtps://masonmarket123%40gmail.com:GMU123456@smtp.gmail.com:465/";

 Accounts.config({
             sendVerificationEmail:true
         });
 
Email.send({
  from: "meteor.email.2014@gmail.com",
  to: "naghma123@hotmail.com",
  subject: "Meteor Can Send Emails via Gmail",
  text: "Its pretty easy to send emails via gmail."
});
    }
});
