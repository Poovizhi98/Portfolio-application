// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

router.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


// Set default API response
router.get('/', function (req, res) {

    res.json({
        status: 'API Its Working111',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
// Import contact controller
var profileController = require('./profileController');
// Contact routes
router.route('/profiles')
    .get(profileController.index)
    .post(profileController.new);
router.route('/profiles/:profile_id')
    .get(profileController.view)
    .patch(profileController.update)
    .put(profileController.update)
    .delete(profileController.delete);
router.route('/profiles/:profile_id/:section')
    .get(profileController.view)
    .patch(profileController.update)
    .put(profileController.update)
    .delete(profileController.delete);
// Export API routes
module.exports = router;