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


function displayDate()
{
//    console.log(Books.find({_id: Router.current().params._id},{"title":1}));
//    console.log(document.getElementsByClassName('xyz-title')[0].children[0].href);
//console.log(document.getElementsByClassName('xyz-title')[0].getElementsByTagName('a')[0].innerHTML);
//console.log(document.getElementsByTagName('a')[0].href);
var User = Meteor.user().emails[0].address;
var Owner = document.getElementById('bookowner').innerHTML;
var contents = document.getElementById("emailDescription").value;

Meteor.call(
  'sendEmail',
  Owner,
  User,
  'MasonMarket - Item Inquiry From ' + User,
  'Message From Potential Buyer:\n\n\t' + contents + '\n\n\n\n\n\n\n\nPlease do not reply to this email, you will not get a reply back.\n\n- Mason Market Team'
);
         $('#top-alert2').fadeIn();
        $('#top-alert2').delay(5000).fadeOut(); 
console.log(document.getElementById("emailDescription").value);
document.getElementById('emailDescription').value = "";
  //  document.getElementById("demo").innerHTML=Date();
}

window.onload = function() {
    var btn = document.getElementById("myButton");

    btn.onclick = displayDate;
}

function gotowebpage (){
    //do stuff with value
}