function validate(rows) {

    const ids = new Set();

    rows.forEach((row, i) => {

        if (!row.testId)
            throw new Error(`Row ${i + 2}: missing testId`);

        if (ids.has(row.testId))
            throw new Error(`Duplicate testId: ${row.testId}`);

        ids.add(row.testId);

        if (!["pass", "fail"].includes(row.expected))
            throw new Error(
                `Row ${row.testId}: expected must be pass or fail`
            );

        if (
            row.expected === "fail" &&
            !row.expectedError
        ) {
            throw new Error(
                `Row ${row.testId}: fail rows require expectedError`
            );
        }

    });

}
module.exports = { validate };