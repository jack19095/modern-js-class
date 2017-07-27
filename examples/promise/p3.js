const get2 = (number, done) => {
  setTimeout(() => {
    done(number * number)
  }, 2000)
}

const get2p = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * number)
    }, 2000)
  });
}

const get5 = (number, done) => {
  setTimeout(() => {
    done(number * number * number * number * number)
  }, 5000)
}
const get7 = (number, done) => {
  setTimeout(() => {
    done(number * number * 0.7)
  }, 7000)
}