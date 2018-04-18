import { Meteor } from 'meteor/meteor';
import './login.html';
import { Template } from 'meteor/templating';
import './createlisting.html';

import {BookContract} from "../contracts/book_contract.js";
import { Books } from '../lib/collections.js';




Template.listing.events({
    'click .buy-button': function (event) {
        event.preventDefault();

        var id = Router.current().params.id; // get ID
        var collection = Books.findOne({_id: id}); // query with ID
        console.log(collection);
    }
});

