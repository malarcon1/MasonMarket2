import { Meteor } from 'meteor/meteor';
import './login.html';
import { Template } from 'meteor/templating';
import './createlisting.html';

import {BookContract} from "../contracts/book_contract.js";
import { Books } from '../lib/collections.js';



Template.createlisting.onCreated(function onCreated(){
	this.subscribe('books');

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
		let title = $('[name=listname]').val();
		let price = $('[name=price]').val();
		let condition = $('.form-check-input:checked').val();
		let course = $('[name=course]').val();
		// let imagesrc = $('[name=pic]').val();
		let description = $('[name=description]').val();
		let owner = Meteor.user();
		let createdAt = new Date();

		let files = $("input.file_bag")[0].files;
		let imagesrc = "";


        S3.upload({
            files:files,
            path:"books"
        },function(e,r){

        	if(e) console.error('Could not upload an image.');
			else{
				imagesrc = r.url;
			}


        });


		            if (price < 0 || price > 5000)
            {
                alert("Price out of range! Please give valid price from 0 to 5000");
                return;
            }

            else if (condition === undefined)
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
			
		

	}
	
});

