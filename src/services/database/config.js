const db = new Dexie('Vunki')

db.version(1).stores({
  decks: '++id, name',
  cards: '++id, word, meaning, difficulty, deck'
})

export default db
