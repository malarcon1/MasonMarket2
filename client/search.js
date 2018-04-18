import {Template} from 'meteor/templating';
import './login.html';
import { Books } from '../lib/collections.js';
import {BookContract} from "../contracts/book_contract.js";

Template.home.events({
    'click .logout': function (event) {
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
    }
});

Template.home.helpers({
    firstName: function () {
        return Meteor.user().emails[0].address;
    }
});