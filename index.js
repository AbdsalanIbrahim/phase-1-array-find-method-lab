function superbowlWin(record) {
    const winRecord = record.find(game => game.result === "W");
    return winRecord ? winRecord.year : undefined;
}

const records = [
    [
        { year: "2015", result: "W" },
        { year: "2014", result: "N/A" },
        { year: "2013", result: "L" },
        { year: "2012", result: "L" },
    ],
    [
        { year: "2016", result: "L" },
        { year: "2015", result: "L" },
        { year: "2014", result: "L" },
        { year: "2013", result: "L" },
    ],
    [
        { year: "1998", result: "W" },
        { year: "2000", result: "L" },
        { year: "2001", result: "W" },
    ],
];

const resultsDiv = document.getElementById("results");

const testResults = [
    superbowlWin(records[0]), 
    superbowlWin(records[1]), 
    superbowlWin(records[2]), 
];

resultsDiv.innerHTML = `
    <p>Test 1 Result: ${testResults[0]}</p>
    <p>Test 2 Result: ${testResults[1]}</p>
    <p>Test 3 Result: ${testResults[2]}</p>
`;
