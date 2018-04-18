import { Meteor } from 'meteor/meteor';
import './login.html';
import { Template } from 'meteor/templating';
import './createlisting.html';

import {BookContract} from "../contracts/book_contract.js";
import { Books } from '../lib/collections.js';



Template.createlisting.onCreated(function onCreated(){
	this.subscribe('Books');

});


Template.createlisting.helpers({
  firstName: function() {
    return Meteor.user().emails[0].address;
  }
});

		

Template.createlisting.events({
	
	'click .logout': function(event){
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
    },
	
	
	'submit form': function(event){
		event.preventDefault();
		var title = $('[name=listname]').val();
		var price = $('[name=price]').val();
		var condition = $('[name=condition]').val();
		var course = $('[name=course]').val();
		var imagesrc = $('[name=pic]').val();
		var description = $('[name=description]').val();
		var owner = Meteor.user().emails[0].address;
		var createdAt = new Date();
		
				
		let listing = new BookContract(title, price, description, imagesrc, owner, condition, course);
		
		//insert into book collection
		Books.insert(listing);
	}
	
});

