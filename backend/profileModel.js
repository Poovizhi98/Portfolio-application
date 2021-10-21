var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Setup schema

var projectSchema = new Schema({ any: [] });
var experienceSchema = new Schema({ any: [] });
var testimonialsSchema = new Schema({ any: [] });
var educationSchema = new Schema({ any: [] });

var profileSchema = mongoose.Schema({ 
    "employeeID":String,
    "name":String,
    "email":String,
    "mobile":Number,
    "about":String,
    "availability":String,
    "DOJ":Date,
    "gender":String,
    "totalExperience":Number,
    "coreSkills":[ { type: String } ],
    "secondarySkills":[ { type: String } ],
    "designation":String,
    "manager":String,
    "projectSummary":[  ],
    "experienceSummary":[  ],
    "testimonials":[ ],
    "education":[ ],
    "numberOfViews":Number,
    "numberOfLikes":Number,
    "updatedOn":{ type: Date, default: Date.now },
    "createdOn":{ type: Date, default: Date.now },
 });
// Export Profile model
var Profile = module.exports = mongoose.model('profile', profileSchema, 'Employee');
module.exports.get = function (callback, limit) {
    Profile.find(callback).limit(limit);
}