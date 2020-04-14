<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>Skill Set</h1>
    </div>

    <div id="skillExplain">
      <h2>スキルについての文、スキルについて、</h2>
    </div>

    <a
      id="gitHubLink"
      href="https://github.com/naoueno"
    >
      GitHub:https://github.com/naoueno
    </a>
    <a class="skillCategories">
      <p
        class="Frontend"
        @click="FEchange"
      > Front-end</p>
      <p
        class="Backend"
        @click="BKchange"
      >Back-end</p>
      <p
        class="Develop"
        @click="Devchange"
      >DevOps</p>
    </a>
    <div class="Frontend">
      <p>HTML</p>
      <p>CSS</p>
      <p>JavaScript</p>
      <p>SCSS</p>
      <p>Vue</p>
    </div>
    <div
      class="Backend"
      :class="{'active': BKclicked}"
    >
      <p>Java</p>
      <p>Ruby</p>
      <p>RubyOnRails</p>
      <p>MySQL</p>
    </div>
    <div
      class="Develop"
      :class="{'active': Devclicked}"
    >
      <p>Linux</p>
      <p>Node</p>
      <p>Git</p>
      <p>Github</p>
      <p>Firebase</p>
    </div>
    <div class="skillGraph">
      <div v-if="FEclicked">
        <FrontChart />
      </div>
      <div v-if="BKclicked">
        <BackChart />
      </div>
      <div v-if="Devclicked">
        <DevelopChart />
      </div>
    </div>
  </div>
</template>

<script>
  import FrontChart from './skillchart-front.vue';
  import BackChart from './skillchart-back.vue';
  import DevelopChart from './skillchart-develop.vue';

  export default {
    name: 'Skill',

    components: {
      FrontChart,
      BackChart,
      DevelopChart,
    },

  data() {
    return{
      FEclicked:true,
      BKclicked:false,
      Devclicked:false
    }
  },
  methods:{
    FEchange(){
      this.FEclicked=true;
      this.BKclicked=false;
      this.Devclicked=false;
    },
    BKchange(){
      this.BKclicked=false;
      this.FEclicked=true;
      this.Devclicked=false;
    },
    Devchange(){
      this.BKclicked=false;
      this.FEclicked=false;
      this.Devclicked=true;
    }
  }
  }
</script>

<style scoped>
#skillSection {
  background-color: #F5F5F5;
  text-align: center;
  padding: 10px;
}
#skillTitle {
  color: #707070;
  font-weight: bold;
  font-size: 18pt;
}
#skillExplain {
  font-size: 12pt;
  color: #707070;
  margin-left: auto;
  margin-right: auto;
}
.Front-end {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: red;
}
.active p {
  background-color: rgba(84, 190, 238, 0.5);
}
.Front-end:active {
  background-color: red;
}
.Back-end {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: blue;
}
.Back-end:active {
  background-color: blue;
}
.Develop {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: purple;
}
.Develop:active {
  background-color: purple;
}
.skillGraph {
  width: 100%;
}
.BKsee {
  display: none;
}
.DevSee {
  display: none;
}
.Front-end p {
  color: red;
  margin: 10px;
  float: left;
  border: solid 1px #000;
  padding: 0 5px;
}
.Back-end p {
  color: green;
  margin: 10px;
  float: left;
  border: solid 1px #000;
  padding: 0 5px;
}
.DevOps p {
  color: purple;
  margin: 10px;
  float: left;
  border: solid 1px #000;
  padding: 0 5px;
}

</style>
