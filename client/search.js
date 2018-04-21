//This file goes in your Client folder

import {Template} from 'meteor/templating';
import './login.html';
import { Books } from '../lib/collections.js';
import {BookContract} from "../contracts/book_contract.js";

if (Meteor.isClient){
	Template.search.helpers({
		books: function(){
			Meteor.subscribe("search", Session.get("searchVal"));
			
			//if (Books.find({}).title == "");
			
			
			//if (Session.get("searchVal")) {
			return Books.find({}); //searchVal
				
		},
			
		firstName: function() {
				return Meteor.user().emails[0].address;
		}
	});	
	
	Template.search.events({
		'click .logout': function (event) {
			event.preventDefault();
			console.log("Test");
			Meteor.logout();
		},
		
		'submit #search': function(event){
			event.preventDefault();
			Session.set("searchVal", $("#searchVal").val());
			
			var searchtitle = $('[id=searchVal]').val();
			console.log(searchtitle);
			
		}
	});
}



/*    'keyup [name="search"]' ( event, template ) {
        let value = event.target.value.trim();

        if ( value !== '' && event.keyCode === 13 ) {
            template.searchQuery.set( value );
            template.searching.set( true );
        }

        if ( value === '' ) {
            template.searchQuery.set( value );
        }
    }
});

Template.search.onCreated( () => {
    let template = Template.instance();

    template.searchQuery = new ReactiveVar();
    template.searching   = new ReactiveVar( false );

    template.autorun( () => {
        template.subscribe( 'books', template.searchQuery.get(), () => {
            setTimeout( () => {
                template.searching.set( false );
            }, 300 );
        });
    });
});

Template.search.helpers({
    firstName: function () {
        return Meteor.user().emails[0].address;
    },
    searching() {
        return Template.instance().searching.get();
    },
    query() {
        return Template.instance().searchQuery.get();
    },
    books() {
        let books = Books.find();
        if ( books ) {
            return books;
        }
    }
});*/