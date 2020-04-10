<template>
  <div id="mainSection">
    <div id="userName">
      N.Ueno
    </div>
    <div id="companyName">
      Seattleconsulting
    </div>
    <img
      id="profilePicture"
      src="7247-00036-2.jpeg"
    >
  </div>
</template>

<script>
export default {
  name: 'Main',
    msg: String
}
</script>

<style scoped>
@import url(https://www.google.com/get/noto/);
#mainSection {
  background: linear-gradient(180deg, #80E1F7, #06C1E6);
  padding-bottom: 30px;
  text-align: center;
}
#userName {
  color: #FFFFFF;
  font-family: 'Noto Suns';
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 0px 0.5px 2px black;
  padding: 20px 0;
  border-bottom: 1px solid#FFFFFF;
  margin: 0 310pt;
}
#companyName {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #FFFFFF;
  font-family: 'Noto Suns';
  font-weight: bold;
  font-size: 18pt;
  text-shadow: 0px 0.5px 2px black;
}
#profilePicture {
  border-radius: 50%;
  width: 64px;
  height: 64px;
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
