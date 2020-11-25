import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import store from "./store";

import vPartner from "@/components/partner";

Vue.component("vPartner", vPartner);

import vSelect from "@/ui/select";
import vInputs from "@/ui/inputs";
import vColorSelect from "@/ui/color_select";
import vAmount from "@/ui/amount";
import vAmountZ from "@/ui/amount_zakaz.vue";

Vue.component("vSelect", vSelect);
Vue.component("vInputs", vInputs);
Vue.component("vColorSelect", vColorSelect);
Vue.component("vAmount", vAmount);
Vue.component("vAmountZ", vAmountZ);

import VueMask from "v-mask";
Vue.use(VueMask);
import { VueMaskDirective } from "v-mask";
Vue.directive("mask", VueMaskDirective);
import { VueMaskFilter } from "v-mask";
Vue.filter("VMask", VueMaskFilter);

const checkMe = (el, parent) => {
  if (parent === el) return false;
  else if (parent.parentElement) return checkMe(el, parent.parentElement);
  else if (parent === document.getElementsByTagName("html")[0]) return true;
  else return false;
};

Vue.directive("click-outside", {
  isLiteral: true,
  params: ["popup"],
  bind: function(el, binding, vnode) {
    window.onclick = e => {
      if (checkMe(el, e.target)) vnode.context[binding.arg] = false;
    };
  },
  unbind: function(el) {
    window.onclick = e => {};
  }
});

router.beforeEach((to, from, next) => {
  store.dispatch("show/setBurger", false);
  next();
});
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
