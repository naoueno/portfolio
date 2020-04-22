<template>
  <div id="footerSection">
    <a
      href="#mainSection"
    >
      <img
        class="scroll"
        src="../assets/css/scroll-icon.png"
        alt="page top"
      >
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
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#mainSection'),
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
  background: -moz-linear-gradient(top, #06C1E6, #99FFCC);
  background: -webkit-linear-gradient(top,#06C1E6, #99FFCC);
  background: linear-gradient(to bottom, #06C1E6, #99FFCC);
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
