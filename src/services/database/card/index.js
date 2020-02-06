const Cards = Database.cards;

export default {
  methods: {
    save: async function save(obj) {
      return await Cards.put(obj)
        .then(response => {
          return response;
        })
        .catch(ex => {
          console.log(ex);
        });
    },

    update: async function update(id, obj) {
      return await Cards.update(id, obj);
    },

    get: async function get(id) {
      return await Cards.get(parseInt(id), res => {
        return res;
      });
    }
  }
};