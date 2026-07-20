// .mocharc.js
module.exports = {
    require: ["./tests/setup.js"],
 timeout: 30000,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "mochawesome-report",
    reportFilename: "report",
    reportTitle: "My SQA110 Suite",
    reportPageTitle: "My SQA110 Suite",
    inline: true,
    charts: true,
    autoOpen: false,
    overwrite: true
 },
};
