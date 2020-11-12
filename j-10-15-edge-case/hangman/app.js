const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
  puzzleEl.textContent = game1.puzzle
  guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  game1 = new Hangman(puzzle, 5)
  render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

getPuzzle('2').then((puzzle) => {
  console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})


// getLocation().then(({city, region, country}) => {
//   console.log(`You are in ${city}, ${region}, ${country}`);
// }).catch((err) => {
//   console.log(`Error: ${err}`);
// })

getLocation().then((location) => {
  return getCountry(location.country).then(({name}) => {
    console.log(name)
  }, (err) => {
    console.log(`Error bro: ${err}`);
  });
});


getCurrentCountry().then((country) => {
  console.log(country.name);
}).catch((err) => {
  console.log(err);
});


// getLocation().then(({country}) => {
//   return getCountry(country)
// }).then((country) => {
//   console.log(country.name)
// }, (err) => {
//   console.log(`There has been an error finding the requested information. ${err}`)
// })



//--------------------------------------

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error('Unable to fetch the puzzle')
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((err) => {
//   console.log(err)
// })
































// create a new function for getting country details (request file)
// call it with two arguments (country code and callback function)
// make the HTTP request and call the callback with country information
// use the callback to print the country name





// HTTP - hypertext transfer protocol, we issue this request to a third party server for response
// Request - what do we want to do
// Response - what was actually done

// // Making an HTTP request

// const countryCode = 'GB'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText)
//     const country = data.find((country) => country.alpha2Code === countryCode)
//     console.log(country.name)
//   } else if (e.target.readyState === 4) {
//     console.log('error')
//   }
// })

// // make a new request for all countries
// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()


// parse the response text
// find your country object by it's country code
// print the full country code

