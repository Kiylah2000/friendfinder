// Displays all matches
app.get("/survey", function(req, res) {
    return res.json(matches);
  });
  
  // Displays a single character, or shows "No character found"
  app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.matches;
  
    console.log(chosen);
  
    for (var i = 0; i < matches.length; i++) {
      if (chosen === matches[i].routeName) {
        return res.json(matches[i]);
      }
    }
  
    return res.send("No matches found");
  
  });