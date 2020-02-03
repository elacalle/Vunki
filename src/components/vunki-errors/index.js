import template from "./index.html";

export default Vue.extend({
  template,
  props: ["errors"],
  computed: {
    normalizedErrors: function() {
      return this.getErrors();
    }
  },
  methods: {
    getErrors: function() {
      const validationArry = []

      Object.keys(this.errors.$params).forEach(property => {
        Object.keys(this.errors[property].$params).forEach(validation => {
          if(!this.errors[property][validation]) validationArry.push({
            property, 
            validation, 
            params: this.errors[property].$params[validation]
          });
        });
      });

      return validationArry; 
    }
  }
});
