import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({ //説明の為、代入しました
  //ここに実装を書きます
  state: {
    skillCategories: [],
    loaded: false
  },

  mutations: {
    setSkillCategories(state, payload) {
      state.skillCategories = payload.skillCategories;
      /* eslint-disable no-debugger */
      debugger
      state.loaded = true;
    },
  },
  getters: {
    getSkills: (state) => (category) =>{
      if (state.skillCategories.length > 0) {
        return state.skillCategories.find((skill) =>skill.category===category);
      }
      return [];
    },
  },
  actions: {
    async updateSkillCategories({commit}) {
      const skillCategories = [];
      const res = await Axios.get('https://us-central1-myfirstfirebase70.cloudfunctions.net/skills');
      res.data.forEach((category) => {
        skillCategories.push(category);
      });
      commit('setSkillCategories', {skillCategories});
    },
  }
})

export default store
