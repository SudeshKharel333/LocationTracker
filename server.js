const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

app.post("/log", (req, res) => {
    const { latitude, longitude } = req.body;
    const log = `User Location: Lat ${latitude}, Lon ${longitude}\n`;

    // Save location data to a file (or database)
    fs.appendFile("locations.txt", log, (err) => {
        if (err) console.log("Error saving location:", err);
    });

    res.send({ message: "Location logged successfully" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
