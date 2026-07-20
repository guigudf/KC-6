const fs = require("fs");
const { parse } = require("csv-parse/sync");

function readCsv(filePath) {

    const fileContent = fs.readFileSync(filePath, "utf-8");

    return parse(fileContent, {
        columns: true,
        skip_empty_lines: true
    });

}

module.exports = { readCsv };