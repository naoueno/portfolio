<template>
  <div id="aboutSection">
    <div id="aboutTitle">
      <h1>About Me</h1>
    </div>
    <div id="aboutExplain">
      <h2> 栃木県出身、大学は神戸へ。新卒１年目の上野です。</h2>
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
