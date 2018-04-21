import {Template} from 'meteor/templating';
import './login.html';
import { Books } from '../lib/collections.js';
import {BookContract} from "../contracts/book_contract.js";
Template.listing.onCreated(function() {

console.log(Router.current().params._id);
console.log(Books.find({_id: Router.current().params._id}));
    this.subscribe('books');
});
//hiiiiiii

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
        console.log(Router.current().params._id);
        return Books.find({_id: Router.current().params._id});
    }
});




Template.listing.events({
    'click .logout': function (event) {
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
    }
});




