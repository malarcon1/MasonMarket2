import { Mongo } from 'meteor/mongo';
export const Books = new Mongo.Collection('books');


/*if (Meteor.isServer){
	Books._ensureIndex({
		title:1, 
	//	condition:1, 
		price:1, 
		description:1
	//	course:1
	//	createdAt:1
	});
}

Books.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Books.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});


let BookSchema = new SimpleSchema({
	'title':{
		type: String,
		label: 'The title of this book'
	},
	/*'condition':{
		type: String,
		label: 'The condition of this book'
	},
	'price':{
		type: String,
		label: 'The price of this book'
	},
	
	'description':{
		type: String,
		label: 'The description of this book'
	},
	
	/*'course':{
		type: String,
		label: 'The course of this book'
	},
	
	'createdAt':{
		type: String,
		label: 'The date this book was created'
	},
});

Books.attachSchema(BookSchema);*/

		