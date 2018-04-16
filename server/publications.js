import { Meteor } from 'meteor/meteor';
import {Books} from "../lib/collections";

Meteor.publish('books', function(skipCount) {
   // var positiveIntegerCheck = Match.Where(function(x) {
     //   check(x, Match.Integer);
       // return x >= 0;
    //});
    //check(skipCount); //, positiveIntegerCheck);

    Counts.publish(this, 'bookCount', Books.find(), {
        noReady: true
    });

    return Books.find({}, {
        limit: 9,
        skip: skipCount
    });
});
//Meteor.publish(Books, function publishBooks(){
  //return Books.find();
//});
