import template from "./index.html";
import sharedView from "../shared";

export default Vue.extend({
  template,
  components: { sharedView },
  created() {
    this.$on("save", function(e) {
      Database.cards.put(e);
    });
  }
});
