let restaurant = {
  name: 'Posillipos',
  guestCapacity: 75,
  guestCount: 61,
  checkAvailability: (partySize) => {
    return partySize < restaurant.guestCapacity - restaurant.guestCount ? true : false
  },
  seatParty: (partySize) => {
    restaurant.guestCount + partySize < 75 ? restaurant.guestCount = restaurant.guestCount + partySize : null
  },
  removeParty: (partySize) => {
    restaurant.guestCount = restaurant.guestCount - partySize
  }
}

restaurant.seatParty(12)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(10)
console.log(restaurant.checkAvailability(4))

