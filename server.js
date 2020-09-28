// require npm packages & models
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose"); 
const db = require("./models");  

const PORT = process.env.PORT || 8080; 
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 
app.use(logger("dev"));

// Connect to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true,  
}); 

// app.use(require("./routes")); 
// Requiring our routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
  