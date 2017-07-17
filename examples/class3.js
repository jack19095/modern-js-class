let score0 = 50;
let score1 = 80;
let score2 = 40;
let scores = [score0, score1, score2, score2, score2, score2];

scores[0] = 100;
console.log(scores);    // 把整個陣列印出來
console.log(scores[0]);  // 只印出第 0 個