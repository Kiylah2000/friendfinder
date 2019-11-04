// Displays all matches
app.get("/survey", function(req, res) {
    return res.json(matches);
  });