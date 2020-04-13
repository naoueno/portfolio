<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      <h1>About Me</h1>
    </div>
    <div id="aboutExplain">
      <h2> 栃木県出身、大学は神戸へ。新卒１年目の上野です。
           大学では栄養学を学んでいましたが、SeattleConsultingに出会いIT業界へ興味を持つように。
           未経験からの出発ですが日々の研修が楽しく、SEとして経験を積みたい気持ちが強まっています。
           SEにUIUX、人事とやりたいことは多く定まっていませんが、どれも極めていくつもりです！！！
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  msg: String
}
</script>

<style scoped>
#aboutSection {
  background-color: #F5F5F5;
  text-align: center;
  padding: 10px;
}
#aboutTitle {
  color: #20879F;
  font-weight: bold;
  font-size: 18pt;
}
#aboutExplain {
  font-size: 12pt;
  color: #707070;
  width: 45vh; /* ビューポートが 600px だとしたら、画像の幅は 60px になる */
  margin-left: auto;
  margin-right: auto;
}
</style>
