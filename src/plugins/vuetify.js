import '@fortawesome/fontawesome-free/css/all.css';
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
  theme: {
    options: { customProperties: true },
    themes: {
      dark: {
        primary: '#00faf2',
        secondary: '#ff0044',
        accent: '#8c9eff',
        error: '#b71c1c',
        background: '#ff0000'
      },
    },
    dark: true,
  },
});
