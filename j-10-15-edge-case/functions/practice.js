//practicing the fetch API

const getPuzzle = (wordCount) => {
  return fetch('url', {}).then((response) => {
    if (response.status === 200) {
      response.json()
    } else {
      throw new Error('the request was unsuccessful')
    }
  }).then((data) => {
    return data.puzzle
  })
}

const getCountry = (countryCode) => {
  return fetch('url', {}).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('No country fam')
    }
  }).then((data) => data.find((country) => country.alpha2Code === country))
}

getLocation = () => {
  return fetch('url', {}).then((response) => {
    if (response.status === 200) {
      return data
    } else {
      throw new Error('There was a problem finding your country')
    };
  });
};

getLocation().then(({country}) => {
  return country;
}).catch((err) => {
  console.log(`Error: ${err}`);
})





//---------------- Async-Await Practice --------------- //























const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000);
  });


const processData = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  return data;
};


processData().then((data) => {
  console.log('Data', data)
}).catch((err) => {
  console.log('Error:', err)
});




























