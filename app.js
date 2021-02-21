// Import express
let express = require('express');
// Import routes
let apiRoutes = require("./api-routes");
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 3000;


// Use Api routes in the App
app.use('/api', apiRoutes);
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express updated again'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});