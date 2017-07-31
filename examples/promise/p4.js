const get2p = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 10) {
        reject('number > 10')
      } else {
        resolve(number * number)
      }
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
  let result1 = await get2p(number).catch(
    (error) => {
      console.log(error)
    })

  try {
    let result2 = await get2p(number)
  } catch (error) {
    console.log(error)
  }
}

run(50);

const run2 = async (number) => {
  let result = await get2p(number)
  return result
}

console.log(run2(5))
