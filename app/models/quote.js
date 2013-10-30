/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Quote Schema
 */
var QuoteSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
	quoteName: {
        type: String,
        default: '',
        trim: true
    },
	description: {
        type: String,
        default: '',
        trim: true
    },
	region: {
        type: String,
        default: '',
        trim: true
    },
    unitquantity: {
        type: Number,
        default: '',
        trim: true
    },
	unitprice: {
        type: Number,
        default: '',
        trim: true
    },
	matstring: {
        type: String,
        default: '',
        trim: true
    },
	tagstring: {
        type: String,
        default: '',
        trim: true
    },
	colorstring: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});


/**
 * Validations
 */
QuoteSchema.path('quoteName').validate(function(quoteName) {
    return quoteName.length;
}, 'Quote name cannot be blank');

/**
 * Statics
 */
QuoteSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user').exec(cb);
    }
};

mongoose.model('Quote', QuoteSchema);
