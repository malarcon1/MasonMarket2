import {Template} from 'meteor/templating';
import './login.html';
import './myaccount.html';
import { Books } from '../lib/collections.js';
import {BookContract} from "../contracts/book_contract.js";


Template.myaccount.onCreated(function() {
    this.subscribe('books');
});



Template.myaccount.helpers({
    firstName: function() {
        return Meteor.user().emails[0].address;
    },
    
    books: function(){
        return Books.find({owner: Meteor.user().emails[0].address});
        //return Books.find();
    },
    
    numBooks: function(){
        var userBooks = Books.find({owner: Meteor.user().emails[0].address});
        return userBooks.count();
    },
    
    deleteBook: function(id){
        console.log("DELETING BOOK RN");
        Books.remove({_id: id});
        console.log(id);
    },//*/
    
    
});

Template.myaccount.events({
    'click .logout': function (event) {
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
        window.location.replace("home");
    },
    
    'click .myaccount': function(event){
        event.preventDefault();
        
        var acct = Meteor.user().emails[0].address;
        var collection = Books.find({owner: acct});
        console.log(collection);
    },
    
});

Template.myaccount.events({
   'click .trash': function() {
       console.log("The ID is clicked...");
       var id2 = document.getElementsByClassName("trash");
       console.log(id2[0].id);
       var bookID = id2[0].id;
       Books.remove({_id: bookID});
   },
});