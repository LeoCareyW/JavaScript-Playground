//callback

const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      callback(undefined, num * 2)
    } else {
      callback('number must be provided')
    }
  }, 2000)
}

getDataCallback(2, (err, data) => {
  if (err) {
    console.log('error')
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log('err')
      } else {
        console.log(data)
      }
    })
  }
})

// promise

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
  })

getDataPromise(2).then((data) => {
  getDataPromise(data).then((data) => {
    console.log(`Promise data: ${data}`)
  }, (err) => {
    console.log(err)
  })
}, (err) => {
  console.log(err)
})

// above is not chained, you end up with a lot off nesting
// ______________________________
// below is chained, return the function then add another, the catch
// will apply to ANY failed promise


getDataPromise(10).then((data) => {
  return getDataPromise(data)
}).then((data) => {
  return 'get data promise'
}).then((data) => {
  console.log(data)
}).catch((err) => {
  console.log(err)
})








