import { createStore } from "vuex";
import modules from "./modules/modules";

export default createStore({
  strict: true,
  modules,
});
