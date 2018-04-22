import {Template} from 'meteor/templating';
import './login.html';
import { Books } from '../lib/collections.js';
import {BookContract} from "../contracts/book_contract.js";

Template.home.onCreated(function() {
    var currentPage = parseInt(Router.current().params.page) || 1;
    var skipCount = (currentPage - 1) * 9; // 3 records per page

    this.subscribe('books', skipCount);
});
//hiiiiiii

Template.home.helpers({
    firstName: function () {
        return Meteor.user().emails[0].address;
    },
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
        return Books.find({}, {sort: {createdAt: -1}});
    },
    prevPage: function() {
        var previousPage = currentPage() === 1 ? 1 : currentPage() - 1;
        return Router.routes.home.path({page: previousPage});
    },
    nextPage: function() {
        var nextPage = hasMorePages() ? currentPage() + 1 : currentPage();
        return Router.routes.home.path({page: nextPage});
    },
    prevPageClass: function() {
        return currentPage() <= 1 ? "disabled" : "";
    },
    nextPageClass: function() {
        return hasMorePages() ? "" : "disabled";
    },

});

var hasMorePages = function() {
    var totalBooks = Counts.get('bookCount');
    return currentPage() * 9 < totalBooks;
}

var currentPage = function() {
    return parseInt(Router.current().params.page) || 1;
}


Template.home.events({
    'click .logout': function (event) {
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
    },
    'click .logout': function (event) {
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
    },

    'search #form-inline mr-auto': function(event){
        event.preventDefault();
        Session.set("searchVal", $("#search-field").val());

        var searchtitle = $('[id=search-field]').val();
        console.log(searchtitle);

    }
});




