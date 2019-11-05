var path = require("path");

module.exports = function (app) {

  // Displays all matches
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Displays a single character, or shows "No character found"
  // fallback use route for homepage
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));

  });
};