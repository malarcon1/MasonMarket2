//This file goes into your SERVER folder

import { Meteor } from 'meteor/meteor';
import {Template} from 'meteor/templating';
import { Books } from '../lib/collections.js';


if (Meteor.isServer){
	Meteor.startup(function (){
		Books._ensureIndex({
			"title": "text"
		});
	//	seed();	
	});
	
	
	Meteor.publish("search", function(searchVal){
	/*if (!searchVal){
		return Books.find({});
	}*/
	
	console.log("Search item", searchVal);
	
	return Books.find(
		{ $text: {$search: searchVal} } );
	});
}

