const fs = require("fs");
const path = require("path");
const fakeDBPath = path.join(__dirname, "../db/data.json");

// Save the data in the `fake` db
exports.saveInTheDB = data => {
    fs.writeFileSync(fakeDBPath, JSON.stringify(data));
};
