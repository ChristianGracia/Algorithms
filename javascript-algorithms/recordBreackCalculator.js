'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function breakingRecords(scores) {
    var recordNumber = [0, 0];
    var maxScore = scores[0];
    var minScore = scores[0];
    var n = scores.length;

    for (var i = 1; i < n+1; i++){
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            recordNumber[0]++;
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
            recordNumber[1]++;
        }
    }
    return recordNumber;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}