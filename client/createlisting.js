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
		var condition = $('.form-check-input:checked').val();
		var course = $('[name=course]').val();
		var imagesrc = $('[name=pic]').val();
		var description = $('[name=description]').val();
		var owner = Meteor.user();
		var createdAt = new Date();
		
		console.log(imagesrc);
		
		/*uploading images via cloudinary
		var files = [];
		var imagesrc = $('[name=pic]').val();
		files.push(imagesrc);
		console.log("Image is" + files[0]);
		
		Cloudinary.upload(files[0], function(err,res){
			console.log("Upload Error:" + err);
			console.log("Result:" + res);
		});
		
		console.log("finished" + files[0]);*/
			
		
		
		if (price < 0 || price > 5000)
		{
				alert("Price out of range! Please give valid price from 0 to 5000");
				return;
		}
	
		if (condition == undefined)
		{
				alert("Please choose a condition for the book!");
				return;
		}
		
		else
		{
		
			console.log("User created listing");
				
			let listing = new BookContract(title, price, description, imagesrc, owner, condition, course);
		
		//insert into book collection
			Books.insert(listing);
		
			console.log(listing);
		
			Router.go('home');
			
		}
	}
	
});

