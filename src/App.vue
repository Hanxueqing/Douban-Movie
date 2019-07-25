<template>
  <div id="app">
    <AppHeader></AppHeader>
    <keep-alive include = "home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import AppHeader from "@/components/Header"
  export default{
    components:{
      AppHeader
    },
    created(){
      //让页面走一下首页，触发Header中的router.beforeEach函数，不然头部会重复出现
      this.$router.push("/")
      //初始化购物车
      this.$store.dispatch("initCar")
    }
  }
</script>

<style lang="scss">


</style>
