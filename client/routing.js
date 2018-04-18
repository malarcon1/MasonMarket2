//Router.route('/', function () {
  //this.redirect('/login');
//});

        
Router.route('/createaccount', function () {
  this.render('createaccount');
});

Router.route('/login', function () {
  this.render('login');
});

Router.route('/listing', function () {
  this.render('listing');
});

Router.route('/listing/:id', function () {
	this.render('listing');
//console.log(Router.current().params._id);
});

Router.route('/createlisting', function () {
  if (Meteor.userId() && this.ready())
  {
	this.render('createlisting');
  }
  else
	  Router.go('home');
  
});

Router.route('/myaccount', function () {
  this.render('myaccount');
});

Router.route('/search', function () {
  this.render('search');
});
/*
Router.route('/home', function () {
  this.render('home');
});*/

Router.route('/', function () {
    this.render('home');
});


Router.route('/:page?', {
    name: 'home',
    path: '/:page?',

});

/* Routing.configure({
	layoutTemplate:'login'

});

Route.map(function(){
	this.route('home',{path:'/'});

}) */