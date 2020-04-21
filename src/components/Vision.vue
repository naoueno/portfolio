<template>
  <div id="visionSection">
    <div id="visionTitle">
      <h1>Vision</h1>
    </div>
    <div id="visionExplain">
      <h2>SE・UIUX・人事と幅広く挑戦していきたいです。
          どの分野でも限界を作らずに、私にしかできないことを見つけたいと考えています。
          「上野さんに聞いてみよう」「上野さんに任せよう」
          そう言ってもらえるような人柄と技術を身に着けることを目指しています。
          これまで、誰と働くかを重要視してきたからこそシアトルコンサルティングに出会えました。
          ここシアトルコンサルティングで多くの人と関わり、大きな成果を共に残していきたいです。
          </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vision',
    msg: String
}
</script>

<style scoped>
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

#visionSection {
  background-color: #F5F5F5;
  text-align: center;
  padding: 10px;
}
#visionTitle {
  color: #20879F;
  font-weight: bold;
  font-size: 18pt;
  padding: 15px;
}
#visionExplain {
font-size: 12pt;
  color: #707070;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin-left: auto;
  margin-right: auto;
  width: 34vw;
  padding-bottom: 30px;
  border: 1px #ccc solid;
  box-shadow: 0 2px 3px 0 #ddd;
  padding: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
