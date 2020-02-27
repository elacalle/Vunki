const Dexie = require('dexie').default

const db = new Dexie('vunki')

db.version(1).stores({
  decks: '++id, name',
  cards: '++id, word, meaning, difficulty, deck'
})

module.exports = db
