<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>Skill Set</h1>
    </div>

    <div id="skillExplain">
      <h2>５段階評価で設定をしました。
          研修を通してFront-endは理解が増えましたが、
          Javascript・SCSS・Vueは猛勉強中です。。。頑張ります！
          Back-endは今後の研修で触れていく予定です。
          DeveOpではGit・GitHubをスムーズに扱えるようになってきました。
          Linux・Nodeはまだまだ理解が足りません。
          今後も研修に励み、研修終了時にはオール５の達成が出来るよう目指します！
         </h2>
      <a
      id="gitHubLink"
      href="https://github.com/naoueno"
    >
      GitHub:https://github.com/naoueno
    </a>

    </div>

    <div id="skillCategories">
      <ul>
        <li>
          <span
            id="front"
            @click="setCurrentChart('front')"
          >
            Front-end
          </span>
        </li>
        <li>
          <span
            id="back"
            @click="setCurrentChart('back')"
          >
            Back-end
          </span>
        </li>
        <li>
          <span
            id="DevOps"
             @click="setCurrentChart('devOps')"
          >
            DevOps
          </span>
        </li>
      </ul>
    </div>
    <div id="skillList">
      <ul
        id="front-end"
        :class="{'front-change': isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        id="back-end"
        :class="{'back-change': isBackActive}"
      >
        <li>Java</li>
        <li>Ruby</li>
        <li>RubyOnRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        id="devops"
        :class="{'dev-change': isDevOpsActive}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div
      class="chart"
      v-if="isFrontActive"
    >
      <FrontChart />
    </div>
    <div
      class="chart"
      v-if="isBackActive"
    >
      <BackChart />
    </div>
    <div
      class="chart"
      v-if="isDevOpsActive"
    >
      <DevChart />
    </div>
  </div>
</template>

<script>
  import FrontChart from './skillchart-front.vue';
  import BackChart from './skillchart-back.vue';
  import DevChart from './skillchart-develop.vue';

  export default {
    name: 'Skill',

    components: {
      FrontChart,
      BackChart,
      DevChart,
    },

    data() {
      return{
        currentChart: 'front'
      }
    },
    computed: {
      isFrontActive() {
        return this.currentChart=='front';
      },
      isBackActive() {
        return this.currentChart=='back';
      },
      isDevOpsActive() {
        return this.currentChart=='devOps';
      },
    },
  methods:{
    setCurrentChart(chart) {
      this.currentChart = chart;
    }
  }
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#skillSection {
  background-color: #F5F5F5;
  text-align: center;
  padding: 30px;
}
#skillTitle {
  color: #20879F;
  font-weight: bold;
  font-size: 18pt;
  padding: 15px;
}
#skillExplain {
  font-size: 12pt;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin-left: auto;
  margin-right: auto;
  width: 34vw;
  padding-bottom: 10px;
  padding-bottom: 10px;
  border: 1px #ccc solid;
  box-shadow: 0 2px 3px 0 #ddd;
  padding: 20px;
}
#gitHubLabel,
#gitHubLink {
  font-size: 12pt;
  color: #20879f;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  font-weight: bold;
}
#skillCategories {
  padding: 20px 20px;
}
li {
  display: inline-block;
  margin: 10px 10px;
}
#front {
  color: #b51a1a;
  font-size: 18px;
  cursor: pointer;
}
#back {
  color: #0f8839;
  font-size: 18px;
  cursor: pointer;
}
#DevOps {
  color: #571083;
  font-size: 18px;
  cursor: pointer;
}
#skillList {
  font-size: 18px;
  width: auto;
}
.chart {
  width: 50vw;
  padding-top: 35px;
  margin-left: auto;
  margin-right: auto;
}
.li {
  display: inline-block;
  margin: 10px 10px;
}
.front-change li {
  background-color: rgba(181, 26, 26, 0.25);
}
.back-change li {
  background-color: rgba(15, 136, 57, 0.25);
}
.dev-change li {
  background-color: rgba(87, 16, 131, 0.25);
}
#front-end li {
  color: rgba(181, 26, 26, 0.75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}
#back-end li {
  color: rgba(15, 136, 57, 0.75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}
#devops li {
  color: rgba(87, 16, 131, 0.75);
  height: 30px;
  font-weight: bold;
  padding: 12px 20px 2px 20px;
  box-shadow: 0 0 8px gray;
}
h3 {
  margin: 40px 0 0;
}
.ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
