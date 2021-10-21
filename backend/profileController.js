// profileController.js
// Import profile model
Profile = require('./profileModel');
// Handle index actions
exports.index = function (req, res) {
    Profile.get(function (err, profiles) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Profiles retrieved successfully",
            data: profiles
        });
    });
};
// Handle create profile actions
exports.new = function (req, res) {
    var profile = new Profile();
    //profile = req.body.profileData; 
    profile.employeeID	= req.body.profileData.employeeID
    profile.name	= req.body.profileData.name
    profile.email	= req.body.profileData.email
    profile.mobile	= req.body.profileData.mobile
    profile.about	= req.body.profileData.about
    profile.availability	= req.body.profileData.availability
    profile.DOJ	= req.body.profileData.DOJ
    profile.gender	= req.body.profileData.gender
    profile.totalExperience	= req.body.profileData.totalExperience
    profile.coreSkills	= req.body.profileData.coreSkills
    profile.secondarySkills	= req.body.profileData.secondarySkills
    profile.designation	= req.body.profileData.designation
    profile.manager	= req.body.profileData.manager
    profile.projectSummary	= req.body.profileData.projectSummary
    profile.experienceSummary	= req.body.profileData.experienceSummary
    profile.testimonials	= req.body.profileData.testimonials
    profile.education	= req.body.profileData.education
    profile.numberOfViews	= req.body.profileData.numberOfViews
    profile.numberOfLikes	= req.body.profileData.numberOfLikes
    profile.updatedOn	= req.body.profileData.updatedOn
    profile.createdOn	= req.body.profileData.createdOn

// save the profile and check for errors
console.log(req.body.profileData.name);
console.log(profile);
    profile.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New profile created!',
            data: profile
        });
    });
};
// Handle view profile info
exports.view = function (req, res) {
    Profile.findOne({ employeeID : req.params.profile_id }, function (err, profile) {
        if (err)
            res.send(err);
        res.json({
            message: 'Profile details loading..',
            data: profile
        });
    });
};
// Handle update profile info - Project Summary
exports.view = function (req, res) {
    Profile.find({ employeeID : req.params.profile_id },req.params.section, function (err, profile) {
        if (err)
            res.send(err);
        res.json({
            message: 'Profile details - Project Summary',
            data: profile
        });
    });
};

// Handle update profile info
exports.update = function (req, res) {
Profile.find({ employeeID : req.params.profile_id }, function (err, profile) {
        if (err)
            res.send(err);
        profile.name = req.body.name ? req.body.name : profile.name;
        profile.gender = req.body.gender;
        profile.email = req.body.email;
        profile.phone = req.body.phone;
// save the profile and check for errors
        profile.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Profile Info updated',
                data: profile
            });
        });
    });
};
// Handle delete profile
exports.delete = function (req, res) {
    Profile.remove({
        _id: req.params.profile_id
    }, function (err, profile) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Profile deleted'
        });
    });
};