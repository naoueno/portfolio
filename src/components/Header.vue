<template>
  <div id="headerSection">
    ＜button v-on:click="7247-00036-2.jpeg" class="btn btn-success">
     <img src="7247-00036-2.jpeg"> 
    /button>
    <Drawer @close="menu" align="left"　:closeable="true">
      <div v-if="open"></div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer";

export default {
    name: 'Header'
    components:{
        Drawer
    }
},
data(){
    return{
        open: false
    }
},
methods:{
    toggle(){
        this.open = !this.open
    }
};
</script>

<style lang="scss">
@import "~brootstrap/scss/brootstrap-reboot",
</style>