import { Template } from 'meteor/templating';
import './login.html';

$('#passwordsNoMatchRegister').hide()
$('#topalert').hide()
Template.login.events({
    'submit form': function(){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        console.log(email);
        console.log(password);

   //     console.log(Meteor.user().emails[0].address);
//$('#passwordsNoMatchRegister').show();
	Meteor.loginWithPassword(email, password, function(error){
    console.log(error.reason);
// 	$('#passwordsNoMatchRegister').fadeIn();

// 	$('#passwordsNoMatchRegister').delay(3000).fadeOut();
        $('#top-alert').fadeIn();
        $('#top-alert').delay(5000).fadeOut();

});

	if(Meteor.userId() && this.ready()){
		//document.location.reload(true);
	   Router.redirect('home');
	}

    }
});


Template.login.helpers({
  firstName: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.login.events({
    'click .logout': function(event){
        event.preventDefault();
        console.log("Test");
        Meteor.logout();
    }
});