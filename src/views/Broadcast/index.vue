<template>
    <div class = "broadcast">
        <MovieBox :type = "type" ></MovieBox>
        <Tabbar></Tabbar>
    </div>    
</template>

<script>
import Tabbar from "@/components/Tabbar"
import MovieBox from "./MovieBox"
export default {
    name:"broadcast",
    data(){
      return{
        type:"in_theaters",
        navs:[
          {id:1,title:"正在热映",type:"in_theaters"},
          {id:2,title:"即将上映",type:"coming_soon"},
        ],
        isfixed:false,
        homeTop:0,
        showing:false
      }
    },
    components:{
      Tabbar,MovieBox
    }
}
</script>

<style lang = "scss" scoped>
    .broadcast{
        font-size:30px;
    }
</style>
