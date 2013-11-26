/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Quote = mongoose.model('Quote'),
    _ = require('underscore');


/**
 * Find project by id
 */
exports.quote = function(req, res, next, id) {
    Quote.load(id, function(err, quote) {
        if (err) return next(err);
        if (!quote) return next(new Error('Failed to load project ' + id));
        req.quote = quote;
        next();
    });
};

/**
 * Create a project
 */
exports.create = function(req, res) {            
    var quote = new Quote(req.body);
    quote.user = req.user;

    quote.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                quote: quote
            });
        } 
        else {
            res.jsonp(quote);
        }
    });
};


/**
 * Update a project
 */
exports.update = function(req, res) {
    var quote = req.quote;
    quote = _.extend(quote, req.body);

	quote.save(function(err) {
        res.jsonp(quote);
    });
};

/**
 * Delete an project
 */
exports.destroy = function(req, res) {
    var quote = req.quote;

    quote.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(quote);
        }
    });
};

/**
 * Show an project
 */
exports.show = function(req, res) {
    res.jsonp(req.quote);
};



/**
 * List of Projects
 */
exports.all = function(req, res) {
    Quote.find().sort('-created').populate('user').exec(function(err, quotes) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(quotes);
        }
    });
};
