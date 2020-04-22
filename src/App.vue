<template>
  <div id="app">
    <Header />
    <Main />
    <div>{{ this.skills }}</div>
    <About />
    <Skill />
    <Vision />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'
import {mapActions,mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
  },
  data: function(){
    return {
      skills: [],
      category: 'front-end',
    };
  },

  computed: {
    ...mapGetters({
      get: 'getSkills',
    }),
  },
  mounted () {
    this.updateSkillCategories();
  },
  methods: {
    ...mapActions(['updateSkillCategories']),

    getSkills() {
      this.get(this.category);
    },
    async test() {
      return await this.updateSkillCategories();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
