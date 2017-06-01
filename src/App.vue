<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <music></music>
  </div>
</template>

<script>
import music from '@/components/Music'

export default {
  name: 'app',
  components: {
    music,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
body{
  background-color: #1c1c1c;
  color: #cccccc;
}
a {
  /*取消超链接下划线*/
  text-decoration: none;
}

*:focus {
  /*取消选中焦点*/
  outline: none;
}

*,
:after :before {
  box-sizing: border-box;
}
</style>
