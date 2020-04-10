<template>
  <div id="Header">
    <button
      id="button"
      class="btn btn-success"
      @click="toggle"
    >
      <img
        src="../assets/css/humberger.png"
        alt="メニューアイコン"
      >
    </button>

    <Drawer
      :closeable="true"
      align="left"
      @close="toggle"
    >
      <div v-if="open">
        content here
      </div>
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
#Header{
  background-color: #F3F3F3;
  width: 100%;
  height:auto
}
#button{
  width: 60px;
  height: 50px;
  box-shadow: none;
  border-style: none;
  opacity: 0.3;
  background-color: #F3F3F3;
  background-size: cover;
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
#humberger{
  height:47%;
  width:47%;
}
</style>
