<template>
  <div id="app">
      <index-header :title="title"></index-header>
      <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
       </transition>
       <index-item></index-item>
  </div>
</template>

<script>
import IndexItem from '@/components/Index/IndexItems.vue'
import IndexHeader from '@/components/Index/Header.vue'
export default {
  name: 'app',
  components: {
     IndexItem,
     IndexHeader
  },
  data () {
    return {
      msg: 'Welcome to lyt Vue.js App'
    }
  },
  computed: {
    title() {
      console.log(this.$route.path.split('/')[2])
      switch (this.$route.path.split('/')[2]) {
            case '':
              return "微信"
            case 'index':
              return "微信"
            case 'webchat':
              return "微信"
            case 'friends':
              return "通讯录"
            case 'finds':
              return "发现"
            case 'profile':
              return "我的个人资料"
        }
    }
  }
}
</script>

<style lang="scss">
html,body {
  height: 100%;
  margin: 0;
}
a {
  outline: none;
  text-decoration: none;
}
a.active {
  text-decoration: none;
}
#app {
  margin:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  color: #2c3e50;
  font-size: 40px;
}

h1, h2 {
  font-weight: normal;
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
