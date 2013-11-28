/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Project Schema
 */
var ProjectSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
	projectName: {
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
	startdate: {
        type: Date,
        default: '',
        trim: true
    },
	enddate: {
        type: Date,
        default: '',
        trim: true
    },
	activity: [ActivitySchema],
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Activity Schema
 */
var ActivitySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    process: {
        type: String,
        default: '',
        trim: true
    },
    material: {
        type: String,
        default: '',
        trim: true
    },
	duration: {
        type: Number,
        default: '',
        trim: true
    },
	costperhour: {
        type: Number,
        default: '',
        trim: true
	},
	stepno: {
        type: Number,
        default: '',
        trim: true
    },
	refid: {
        type: Schema.ObjectId
    }
});

/**
 * Validations
 */
ProjectSchema.path('projectName').validate(function(projectName) {
    return projectName.length;
}, 'Project name cannot be blank');

/**
 * Statics
 */
ProjectSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user').exec(cb);
    }
};

mongoose.model('Project', ProjectSchema);
//for the Activity factory - needs to be setup
mongoose.model('Activity', ActivitySchema);
