import { Template } from 'meteor/templating';
import './createaccount.html';

Template.createaccount.events({
    'submit form': async function(){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var number = $('[name=number]').val();
        console.log(email);
        console.log(password);
        console.log(number);
        var bool = false;
 //       console.log(Meteor.user().emails[0].address);

         await Meteor.call('registerUser',email,number,password, function(error){
    console.log(error.reason);
// 	$('#passwordsNoMatchRegister').fadeIn();

// 	$('#passwordsNoMatchRegister').delay(3000).fadeOut();
        $('#top-alert').fadeIn();
        $('#top-alert').delay(5000).fadeOut();
        bool = true;


});
        Meteor.setTime(function(){
        if(!(bool)){
        	console.log("Here");
         $('#top-alert2').fadeIn();
        $('#top-alert2').delay(5000).fadeOut(); 
    }
}, 1000);
    // call server method
    }

});

