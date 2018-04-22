import { Template } from 'meteor/templating';
import './createaccount.html';

        var bool = false;
Template.createaccount.events({
    'submit form': async function(){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var number = $('[name=number]').val();
        console.log(email);
        console.log(password);
        console.log(number);

 //       console.log(Meteor.user().emails[0].address);

         await Meteor.call('registerUser',email,number,password, function(error){
    console.log(error);
// 	$('#passwordsNoMatchRegister').fadeIn();
    console.log('error');
// 	$('#passwordsNoMatchRegister').delay(3000).fadeOut();
        $('#top-alert').fadeIn();
        $('#top-alert').delay(5000).fadeOut();
        bool = true;

});

        Meteor.setTimeout(function(){
        if(!(bool)){
             Meteor.call(
              'sendVerification',
              email,
              'masonmarket123@gmail.com',
              'Welcome To The Market!',
              'This email to let you know that your account has been verified and you may now log in. Welcome To The Market!'
            );           
        	console.log("Here");
         $('#top-alert2').fadeIn();
        $('#top-alert2').delay(5000).fadeOut(); 
    }
}, 3000);
    // call server method
    }

});

