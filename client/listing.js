import { Meteor } from 'meteor/meteor';
import './login.html';
import { Template } from 'meteor/templating';
import './createlisting.html';

import {BookContract} from "../contracts/book_contract.js";
import { Books } from '../lib/collections.js';

Template.listing.onCreated(function() {

    this.subscribe('books');
});



Template.listing.events({
    'click .buy-button': function (event) {
        event.preventDefault();

        var id = Router.current().params.id; // get ID
        var collection = Books.findOne({_id: id}); // query with ID
        console.log(collection);

    }
});


Template.listing.helpers({

    books: function(){

        // this is how to create and insert a new book
        // let myBook = new BookContract(
        //     title="Book from server code",
        //     price=19.99,
        //     description="This is a random book.",
        //     imagesrc="book.jpg",
        //     owner="user@masonlive.gmu.edu",
        //     condition="new");
        // Books.insert(myBook);
        var id = Router.current().params.id; // get ID
        var collection = Books.find({_id: id}); // query with ID
        return collection;
    }

});