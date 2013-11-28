var async = require('async');

module.exports = function(app, passport, auth) {
    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);

    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Invalid email or password.'
    }), users.session);

    app.get('/users/me', users.me);
    app.get('/users/:userId', users.show);

    //Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the github oauth routes
    app.get('/auth/github', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/github/callback', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Finish with setting up the userId param
    app.param('userId', users.user);

    //Project Routes
    var projects = require('../app/controllers/projects');
	var images = require('../app/controllers/projects');
    app.get('/projects', projects.all);
    app.post('/projects', auth.requiresLogin, projects.create);
    app.get('/projects/:projectId', projects.show);
    app.put('/projects/:projectId', auth.requiresLogin, auth.project.hasAuthorization, projects.update);
	app.del('/projects/:projectId', auth.requiresLogin, auth.project.hasAuthorization, projects.destroy);
	

    //Finish with setting up the projectId param
    app.param('projectId', projects.project);
	
	
	//Quote Routes
   var quotes = require('../app/controllers/quotes');
    app.get('/quotes', quotes.all);
    app.post('/quotes', auth.requiresLogin, quotes.create);
	app.get('/quotes/:quoteId', quotes.show);
    app.put('/quotes/:quoteId', auth.requiresLogin, auth.quote.hasAuthorization, quotes.update);
	app.del('/quotes/:quoteId', auth.requiresLogin, auth.quote.hasAuthorization, quotes.destroy);  
	

    //Finish with setting up the quoteId param
    app.param('quoteId', quotes.quote);

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};