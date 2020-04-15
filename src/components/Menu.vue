<template>
  <div id="drawerSection">
    <div>
      <ul id="drawerMenuSection">
        <li>
          <a
            class="drawerMenuItemLink"
            href="#"
            @click="Top(Section)"
          >Home</a>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    Top () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#Header'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },
    About () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#aboutSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },
    Skill () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#skillSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    },
  Vision () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#visionSection'),
        400,
        null,
        null,
        'y'
      )
      this.$emit('Menu-close')
    }
  }
  }
</script>

<style scoped>
#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
}
#drawerButton {
    background-color: #f3f3f3;
    width: 100%;
    max-width: 768px;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
}
#drawerMenuSection,
  #drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: 0 auto;
  }
  #drawerMenuSection {
     margin-top: 60px;
  }
  #drawerMenuItem {
    height: 50px;
    border-bottom: 0.1px solid #707070;
  }
  #drawerMenuItemLink {
    padding: 10px;
    color: #707070;
    font-family: "Noto Sans Japanese", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    font-size: 12px;
    font-weight: bold;
    border-bottom: 2px solid #fff;
    text-decoration: none; /* リンクの下線消す */
    display: block; /* リンクの範囲広くするため */
    position: relative; /* 文字を移動できるように */
    top: 10px; /* 上から10px移動する */
  }
.a {
      height: 100%;
    }
.li {
  display: block;
}
</style>
