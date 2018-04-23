import { Meteor } from 'meteor/meteor';
import { Promise } from 'meteor/promise';

const fs = require('fs');

//Resolutions = new Mongo.Collection('resolutions');

Meteor.startup(() => {



});

let keyfile = JSON.parse(fs.readFileSync('/Users/Hamza/Desktop/rootkey.json', 'utf8'));

S3.config = { // This is the S3 bucket key that stores our files
    key: keyfile.AWSAccessKeyId,
    secret: keyfile.AWSSecretKey,
    bucket: 'masonmarket',
    region: 'us-east-1'
};


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

Meteor.methods({
  sendVerification(to, from, subject, text) {
    console.log(to);
    smtp = {
    username: 'masonmarket123@gmail.com',
    password: 'GMU123456',
    server: 'smtp.gmail.com',
    port: 587
  }
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

    // Make sure that all arguments are strings.


    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();
console.log("test");
    Email.send({ to, from, subject, text });
    console.log("test");
  }
});


Meteor.methods({
  sendEmail(to, from, subject, text) {
    console.log(to);
    smtp = {
    username: 'masonmarket123@gmail.com',
    password: 'GMU123456',
    server: 'smtp.gmail.com',
    port: 587
  }
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

    // Make sure that all arguments are strings.


    // Let other method calls from the same client start running, without
    // waiting for the email sending to complete.
    this.unblock();

    Email.send({ to, from, subject, text });
  }
});