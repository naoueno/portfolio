<template>
  <div id="Header">
    <button> @click="toggle" class="btn btn=success"><img src="assets/css/7247-00036-2.jpeg"></button>
    <Drawer
      align="left"
      :closeable="true"
      @close="menu"
    >
      <dive v-if="open">
        contact here
      </dive>
    </Drawer>
  </div>
</template>

 <script>
import Drawer from "vue-simple-drawer";

export default {
  name: 'Header',
  components:{
    Drawer,
  }
}
</script>

<style scoped>
Header {
  background-color: #F3F3F3;
  width: 100%;
  height: auto;
  display: block;
}
button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto;
  border-inline: none;
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
