<template>
    <div class = "home">
        <!-- 选项卡切换 -->
        <div class = "tab" :class = "{fixedTop:isfixed}">
            <!-- 定位 -->
            <div class = "city-entry">
                <router-link :to = "{name:'city'}" tag = "span" class = "city-name">青岛</router-link>
                <i class = "fa fa-caret-down"></i>
            </div>

            <!-- 选项栏 -->
            <div class="navbar">
                <span
                v-for = "nav in navs"
                :key = "nav.id"
                :class  = "{'active':type === nav.type}"
                @click = "type = nav.type;hideBanner()"
                >{{nav.title}}</span>
            </div>

            <!-- 搜索图标 -->
            <div class = "search">
                <i class  = "iconfont">&#xe611;</i>
            </div>
        </div>

        <div :class = "{fixedBox:isfixed}">
            <Banner v-if = "showing"></Banner>
            <Swiper v-else></Swiper>
            <Backtop></Backtop>
            
            <MovieBox :type = "type" ></MovieBox>
        </div>

        <Tabbar></Tabbar>
        
    </div>    
</template>

<script>
import Tabbar from "@/components/Tabbar"
import Banner from '@/components/Banner'
import Swiper from "@/components/Swiper"
import MovieBox from "./MovieBox"
import Backtop from "./Backtop"
export default {
    name:"home",
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
    beforeRouteLeave(to,from,next){
      this.homeTop = document.documentElement.scrollTop;
      next();
    },
    methods:{
      hideBanner(){
        if(this.type === "coming_soon"){
          this.showing = true
        }else{
          this.showing = false
        }
      },
      listenScroll(e){
        //获取滚动高度
        let sTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(sTop >= 50 && !this.isfixed){
          this.isfixed = true;
        }else if(sTop < 50 && this.isfixed){
          this.isfixed = false;
        }
      }
    },
    activated(){
      window.addEventListener("scroll",this.listenScroll)
      this.loading = false;//关闭无限滚动
      window.scrollTo(0,this.homeTop)
    },
    deactivated(){
      window.removeEventListener("scroll",this.listenScroll)
      this.isfixed = false;
      this.loading = true;//关闭无限滚动
    },
    components:{
      Tabbar,Banner,MovieBox,Swiper,Backtop
    }
}
</script>
<style lang = "scss" scoped>
    .home{
        padding-bottom:59px;
    }
    .tab{
        z-index:10;
        /* position:fixed; */
        top:50px;
        width:100%;
        height:44px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        background:#fff;
        border-bottom:.5px solid #d8d8d8;
        padding:0 15px;
        &.fixedTop{
            position:fixed;
            left:0;
            width:100%;
            top:0;
            margin-top:0;
        }
        .navbar{
            display:flex;
            justify-content:space-around;
            align-items:center;
            span{
                position:relative;
                line-height:44px;
                font-size:15px;
                font-weight:700;
                text-align:center;
                margin:0 12px;
                &:after{
                    content:"";
                    width:80px;
                    height:2px;
                    background:transparent;
                    position:absolute;
                    left:50%;
                    margin-left:-40px;
                    bottom:0px;
                    transition:all 1s;
                }
            }
            .active{
                color:#ef4238;
                /* position:relative; */
                transition:all 1s;
                &:after{
                    content:"";
                    background:#ff5f16;
                    transition:all 1s;
                }
            }
        }
    }
    .search{
        font-size:16px;
        font-weight:700;
        color:#ef4238;
    }
    .fixedBox{
      margin-top:44px;
    }
</style>
