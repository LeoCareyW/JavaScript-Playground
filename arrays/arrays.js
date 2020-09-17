const notes = [{}, {
  title: 'My next trip',
  body: 'I would like to go to Cuba'
}, {
  title: 'Habbits to work on',
  body: 'Exercise'
}, {
  title: 'Office modifications',
  body: 'New monitor'
}]

notes.forEach((item, index) => {
  console.log(item, index)
})

for (let count = 2; count >= 0; count --) {
  // initial / condition / to do per iteration //
  console.log(count)
}

for (let count = notes.length - 1; count >= 0; count-- ) {
  console.log(notes[count])
}

const index = notes.findIndex((note, index) => {
  console.log(note)
  return note.title === 'Habbits to work on'
})

console.log(index)
