<template>
  <div id="headerSection">
    <div id="nav-drawer">
      <input
        id="nav-input"
        type="checkbox"
        class="nav-unshown"
      >
      <label
        id="nav-open"
        for="nav-input"
      >
        <span></span>
      </label>
      <label
        id="nav-close"
        class="nav-unshown"
        for="nav-input"
      >
      </label>
      <div
        id="nav-content">
        Menu
        <li>Home</li>
        <li>About Me</li>
        <li>Skill Sets</li>
        <li>Vision</li>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  name: 'Header',
  msg: String
}
</script>

<style scoped>
#headerSection{
  background: #F3F3F3;
  padding:0px;
  width: 100%;
  height:auto;
  padding:10px;
  position: fixed;
  top: 0;

}
#nav-drawer{
  position: relative;
}
.nav-unshown{
  display:none;
}
#nav-open{
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
  float: left;
}
#nav-open span, #nav-open span:before, #nav-open span:after {
  position: absolute;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #555;
  display: block;
  content: '';
  cursor: pointer;
}
#nav-open span:before {
  bottom: -8px;
}
#nav-open span:after {
  bottom: -16px;
}
#nav-close {
  display: none;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;
}
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 90%;
  max-width: 330px;
  height: 100%;
  background: #fff;
  transition: .3s ease-in-out;
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);
}
#nav-input:checked ~ #nav-close {
  display: block;
  opacity: .5;
}
#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  box-shadow: 6px 0 25px rgba(0,0,0,.15);
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
