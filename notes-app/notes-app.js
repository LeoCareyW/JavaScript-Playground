// DOM - Document Object Model

// const p = document.querySelector('p')
// p.remove()
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

const filters = {
  searchText: ''
}

const renderNotes = (notes, filters) => {
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })
  document.querySelector('#notes').innerHTML = ''

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    document.querySelector('#notes').appendChild(noteEl)
  })
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-note-button').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function(note) {
    note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//   p.textContent = '********'
//   // console.log(p.textContent)
//   // p.remove()
// })

// const newPara = document.createElement('p')
// newPara.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newPara)
