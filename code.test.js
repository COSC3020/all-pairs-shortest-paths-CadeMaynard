const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var graph = [[0,0,1,0,0,0],
    [0,0,0,3,0,0],
    [1,0,0,4,0,3],
    [0,5,4,0,2,0],
    [0,0,0,2,0,0],
    [0,0,3,0,0,0]];

var distReturned = [[0,10,1,5,7,4],
    [8,0,7,3,5,10],
    [1,9,0,4,6,3],
    [5,5,4,0,2,7],
    [7,7,6,2,0,9],
    [4,12,3,7,9,0]]

assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(distReturned));

var graph = [[0,5,0,0],
    [5,0,6,2],
    [0,6,0,3],
    [0,2,3,0]];

var distReturned = [[0,5,10,7],
    [5,0,5,2],
    [10,5,0,3],
    [7,2,3,0]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(distReturned));

var graph = [[0,4,0,3,0],
    [4,0,6,0,3],
    [0,6,0,1,0],
    [0,0,1,0,2],
    [0,3,0,2,0]];

var distReturned = [[0,4,4,3,5],
    [4,0,6,5,3],
    [10,6,0,1,3],
    [9,5,1,0,2],
    [7,3,3,2,0]];
assert(JSON.stringify(allPairsShortestPaths(graph)) == JSON.stringify(distReturned));
