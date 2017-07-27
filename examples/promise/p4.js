const get2p = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * number)
    }, 2000)
  });
}
const get5p = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * number * number * number * number)
    }, 5000)
  });
}
const get7p = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number * number * 0.7)
    }, 7000)
  });
}

const run = async (number) => {
  let result = await get2p(number)
  console.log(result)
}

run(5);
