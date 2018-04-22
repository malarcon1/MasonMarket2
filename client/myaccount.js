import {Template} from 'meteor/templating';
import './login.html';
import './myaccount.html';
import { Books } from '../lib/collections.js';
import {BookContract} from "../contracts/book_contract.js";


Template.myaccount.onCreated(function() {

    this.subscribe('books');
});
/*
myaccount.getElementById("trashbutton").addEventListener('click',deleteBook() {
        alert("hello");
});*/


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
        var collection = Books.remove({_id: id});
        console.log(collection);
        console.log(id);
    },
    
    
    
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
    /*
    'click .trash': function(event){
        event.preventDefault();
        console.log("Test");
        //need to retrieve id of specific book
        var collection = Books.remove({_id: _id}); //remove book from site
        console.log(collection);
    },*/
    
});