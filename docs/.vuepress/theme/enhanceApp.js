import {
  LayoutPlugin,
  FormPlugin,
  FormInputPlugin,
  TabsPlugin,
  BNav,
  BButton,
  BInputGroup,
} from "bootstrap-vue";
import * as VueScrollTo from "vue-scrollto";
import axios from "axios";
import VueAxios from "vue-axios";
import "focus-visible";

export default ({ Vue, options, router, siteData }) => {
  Vue.use(VueScrollTo);
  Vue.use(LayoutPlugin);
  Vue.use(FormPlugin);
  Vue.use(TabsPlugin);
  Vue.use(FormInputPlugin);
  Vue.use(VueAxios, axios);
  Vue.component("b-nav", BNav);
  Vue.component("b-button", BButton);
  Vue.component("b-input-group", BInputGroup);
};
