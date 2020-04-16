<template>
  <div id="footerSection">
    <a
      href="#"
      @click="clickSmoothScroll()">
      <img
        class="scroll"
        src="../assets/css/scroll-icon.png"
        alt="page top">
    </a>
    <div id="hoge"></div>
    <div id="footerCopyright">
      ©︎Seattleconsulting
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
    msg: String ,
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#Header'),
        400,
        null,
        null,
        'y'
      )
    }
   }
}
</script>

<style scoped>
#footerSection{
  background: -moz-linear-gradient(top, #80E1F7, #06C1E6);
  background: -webkit-linear-gradient(top, #80E1F7, #06C1E6);
  background: linear-gradient(to bottom, #80E1F7, #06C1E6);
  }
#footerCopyright{
  color:#ffffff;

}
.scroll{
  border-radius: 50%;
  height: 30px;
  width: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
</style>
