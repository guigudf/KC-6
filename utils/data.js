const { readExcel } = require("./excel");
const { readCsv } = require("./csv");

function readData(filePath) {

    if (filePath.endsWith(".xlsx") || filePath.endsWith(".xls")) {
        return readExcel(filePath);
    }

    if (filePath.endsWith(".csv")) {
        return readCsv(filePath);
    }

    throw new Error(`Unsupported data file: ${filePath}`);
}

module.exports = { readData };