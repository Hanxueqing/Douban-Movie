<template>
    <div class = "app-header" v-if = "isShow">
        <div class = "left">
            <i :class = "['fa','fa-' + icon]"></i>
            <span>{{title}}</span>
        </div>
        <div class = "right">
            <span>城市</span>
        </div>
    </div>
</template>

<script>
import router from  "@/router"
export default {
    data(){
        return{
            icon:"home",
            title:"豆瓣首页",
            isShow:true
        }
    },
    created(){
        router.beforeEach((to,from,next)=>{
            switch(to.name){
                case "home":
                    this.title = "豆瓣首页"
                    this.icon = "home"
                    this.isShow = true
                    break;
                case "audio":
                    this.title = "豆瓣影音"
                    this.icon = "audio-description"
                    this.isShow = true
                    break;
                case "broadcast":
                    this.title = "正在热映"
                    this.icon = "caret-square-o-left"
                    this.isShow = true
                    break;
                case "group":
                    this.title = "即将上映"
                    this.icon = "group"
                    this.isShow = true
                    break;
                case "mine":
                    this.title = "豆瓣我的"
                    this.icon = "cog"
                    this.isShow = true
                    break;
                default:
                    this.isShow = false
                    break;

            }
            next();
        })
    }
}
</script>

<style lang = "scss" scoped>
    .app-header{
        /* position:fixed; */
        width:100%;
        height:0.5rem;
        line-height:50px;
        background:#f03d37;
        border-bottom:0.01rem solid #fff;
        opacity:0.8;
        z-index:10;
        color:#fff;
        display:flex;
        justify-content:space-between;
        flex-direction:row;
        padding:0 0.2rem;
        i{
            font-size:1.2em;
            padding-right:0.1rem;
        }
    }
    .left{
        color:#fff;
        
    }
</style>
