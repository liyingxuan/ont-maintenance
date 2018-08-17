<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap/dist/js/bootstrap.min.js'

  export default {
    name: 'App'
  }
</script>

<style>
  body {
    font-family: "PingFang SC", Verdana, "Microsoft YaHei", "微软雅黑", sans-serif;
    background-image: linear-gradient(-1deg, #404950 18%, #1D2527 58%, #0D181A 99%);
  }
</style>
