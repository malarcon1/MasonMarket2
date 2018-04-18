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

Meteor.publish( 'books', function( search ) {
    check( search, Match.OneOf( String, null, undefined ) );

    let query      = {},
        projection = { limit: 10, sort: { title: 1 } };

    if ( search ) {
        let regex = new RegExp( search, 'i' );

        query = {
            $or: [
                { title: regex },
                { artist: regex },
                { year: regex }
            ]
        };

        projection.limit = 100;
    }

    return Books.find( query, projection );
});

//Meteor.publish(Books, function publishBooks(){
  //return Books.find();
//});
