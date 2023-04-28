import { createStore } from "vuex";

export default createStore({
  state: {
    socials: {
      github: {
        info: "Justindo720",
        info_link: "https://github.com/JustinDo720",
        info_icon: "mdi-github",
        info_color: "#eeeeee",
      },
      linkedin: {
        info: "Justin Do",
        info_link: "https://www.linkedin.com/in/justin-do-4651561a3/",
        info_icon: "mdi-linkedin",
        info_color: "#0c65c3",
      },
      email: {
        info: "justindo720@gmail.com",
        info_icon: "mdi-email",
        info_color: "#43a047",
      },
      number: {
        info: "922-281-5875",
        info_icon: "mdi-instagram",
        info_color: "#e2306c",
      },
      instagram: {
        info: "@darkowwl",
        info_link: "https://www.instagram.com/darkowwl/",
        info_icon: "mdi-phone",
        info_color: "#3dba2e",
      },
    },
    resized: false,
  },
  getters: {},
  mutations: {
    changeResize(state, payload){
      // we can access our states when we commit a mutation
      state.resized = payload.resized_screen
    }
  },
  actions: {},
  modules: {},
});
