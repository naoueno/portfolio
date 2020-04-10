<template>
  <div id="drawerSection">
    <img
      id="drawerButton"
      src="7242-00036-2.jpeg"
    >
    <span>Menu</span>
    <ul id="drawerMenuSection">
      <li>Home</li>
      <li>About Me</li>
      <li>Skill Sets</li>
      <li>Vision</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
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
