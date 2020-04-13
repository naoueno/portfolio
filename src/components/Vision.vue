<template>
  <div id="visionSection">
    <div id="visionTitle">
      <h1>Vision</h1>
    </div>
    <div id="visionExplain">
      <h2>visionについての文</h2>
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
#visionSection {
  background-color: #F5F5F5;
  text-align: center;
  padding: 10px;
}
#visionTitle {
  color: #20879F;
  font-weight: bold;
  font-size: 18pt;
}
#visionExplain {
  font-size: 12pt;
  color: #707070;
  margin-left: auto;
  margin-right: auto;
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
