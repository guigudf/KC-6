// utils/logger.js
const winston = require("winston");
const path = require("path");
// Pretty format for humans (local dev)
const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "HH:mm:ss" }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level} ${message}`;
  })
);
// Structured format for machines (CI, parsing)
const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);
// Timestamped log filename so we don't overwrite previous runs
const runId = new Date().toISOString().replace(/[:.]/g, "-");
const logFile = path.join("logs", `test-run-${runId}.log`);
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  transports: [
    new winston.transports.Console({
      level: "info",
      format: consoleFormat,
    }),
    new winston.transports.File({
      filename: logFile,
      level: "debug",
      format: fileFormat,
    }),
  ],
});

function maskSecret(str) {
    if (!str) return str;

    if (str.length <= 4) {
        return "***";
    }

    return str.slice(0, 2) + "***" + str.slice(-2);
}

module.exports = {
    logger,
    maskSecret
};