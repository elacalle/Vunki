const Cards = Database.cards

export async function save (obj) {
  return Cards.put(obj).then(response => { return response })
}

export async function update (id, obj) {
  return Cards.update(id, obj)
}

export async function get (id) {
  return Cards.get(parseInt(id))
}

export async function remove (id) {
  return Cards.delete(parseInt(id))
}

export async function all () {
  return Cards.toArray()
}
