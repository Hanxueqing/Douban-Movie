<template>
    <div class = "group">
        <Tabbar></Tabbar>
        <MovieBox></MovieBox>
    </div>    
</template>

<script>
import Tabbar from "@/components/Tabbar"
import MovieBox from "./MovieBox"
export default {
    components:{
      Tabbar,MovieBox
    }
}
</script>

<style lang = "scss" scoped>
    .group{
        font-size:30px;
    }
</style>
