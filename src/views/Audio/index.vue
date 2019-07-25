<template>
    <div class = "audio">
        <h1 class = "title">同时入选IMDB250和豆瓣电影250的电影</h1>
        <MovieBox></MovieBox>
        <Tabbar></Tabbar>
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
    .title{
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        color: #494949;
        margin: 30px;
        padding: 30px;
        border: 0.01rem solid #f03d37;
        border-radius: 20px;
    }
    .audio{
        font-size:30px;
        position:relative;
    }
</style>
