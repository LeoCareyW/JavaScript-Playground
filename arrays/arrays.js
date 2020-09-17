const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Cuba'
}, {
  title: 'Habbits to work on',
  body: 'Exercise'
}, {
  title: 'Office modifications',
  body: 'New monitor'
}]

const findNote = (notes, noteTitle) => {
  return notes.find((note, index) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
 }

 const findNotes = (notes, query) => {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
 }



console.log(findNotes(notes, 'cuba'))



 // const findNote = (notes, noteTitle) => {
 //  const index = notes.findIndex((note, index) => {
 //    return note.title.toLowerCase() === noteTitle.toLowerCase()
 //  })
 //  return notes[index]
 // }

// const note = findNote(notes, 'office modifications')
// console.log(note)

// notes.forEach((item, index) => {
//   console.log(item, index)
// })

// for (let count = 2; count >= 0; count --) {
//   // initial / condition / to do per iteration //
//   console.log(count)
// }

// for (let count = notes.length - 1; count >= 0; count-- ) {
//   console.log(notes[count])
// }
