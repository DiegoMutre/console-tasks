const fs = require("fs");
const fakeDBPath = "../db/data.json";

// Save the data in the `fake` db
exports.saveInTheDB = data => {
    fs.writeFileSync(fakeDBPath, JSON.stringify(data));
};
