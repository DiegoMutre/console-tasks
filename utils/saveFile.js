const fs = require("fs");
const path = require("path");
const fakeDBPath = path.join(__dirname, "../db/data.json");

// Save the data in the `fake` db
exports.saveInTheDB = data => {
    fs.writeFileSync(fakeDBPath, JSON.stringify(data));
};

exports.readDB = () => {
    if (!fs.existsSync(fakeDBPath)) {
        return null;
    }

    const dataNotParsed = fs.readFileSync(fakeDBPath, { encoding: "utf-8" });
    const dataParsed = JSON.parse(dataNotParsed);
    return dataParsed;
};
