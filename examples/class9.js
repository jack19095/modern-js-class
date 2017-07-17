let sports = ['soccer', 'baseball', 'football', 'swimming'];
for (sport of sports) {
  console.log(sport);
  if (sport === 'baseball') {
    console.log('baseball!');
    break;
  }
}