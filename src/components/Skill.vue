<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>Skill Set</h1>
    </div>

    <div id="skillExplain">
      <p>sample</p>
    </div>

    <div id="gitHubLabel">
      <p>label</p>
    </div>

    <a
      id="gitHubLink"
      href="https://github.com/naoueno"
    >
      GitHub:https://github.com/naoueno
    </a>
  </div>
</template>

<script>
export default {
  name: 'Skill',
    msg: String
}
</script>

<style>
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
