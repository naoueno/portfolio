<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      <h1>About Me</h1>
    </div>
    <div id="aboutExplain">
      <h2> 栃木県出身、大学は憧れた関西へ。Team20の上野です。
           料理好きで、また将来の家族のためを想い大学で栄養学を勉強していました。
           しかしSeattleConsultingに出会いIT業界に興味を抱き始め、方向転換。
           未経験からの出発で、苦戦する日々ですがとても充実しており、勉強が楽しくて仕方ありません。
           シアトルでのあだ名はなーちゃん。Twitterも始めました。そっと見守っていただけたらと思います。
      </h2>
      <a
      id="twitterLink"
      href="https://twitter.com/umisukinaacha"
     >
     Twitter:@umisukinaacha
      </a>
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
@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);

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
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  line-height: 1.5;
  word-break: break-all;
  margin-left: auto;
  margin-right: auto;
  width: 34vw;
  padding-bottom: 10px;
}
#twitterLink {
  font-size: 12pt;
  color: #20879f;
  font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  font-weight: bold;
}
</style>
