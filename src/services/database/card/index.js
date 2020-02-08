const Cards = Database.cards

export default {
  methods: {
    save: async function save (obj) {
      return Cards.put(obj)
        .then(response => {
          return response
        })
        .catch(ex => {
          console.log(ex)
        })
    },

    update: async function update (id, obj) {
      return Cards.update(id, obj)
    },

    get: async function get (id) {
      return Cards.get(parseInt(id))
    },

    delete: async function (id) {
      return Cards.delete(parseInt(id))
    },

    all: async function all () {
      return Cards.toArray()
    }
  }
}
