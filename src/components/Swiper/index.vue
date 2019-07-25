<template>
    <div class = "home-banner swiper-container loading">
        <div class = "swiper-wrapper">
            <div
                class = 'swiper-slide'
                v-for = "banner in banners"
                :key = "banner.id"
            >
                <img width = "100%" :src = "banner.src" alt = "">
            </div>
        </div>
        <div class = "swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from "swiper"

export default {
    data(){
        return{
            banners:[]
        }
    },
    created(){
        this.$http.get("/api/banners.json").then(res=>{
            this.banners = res.data.Banners
            this.$nextTick(()=>{//在这个函数里面，因为数据改变导致页面生成新的真实dom，全部渲染完成了
                new Swiper(".home-banner",{
                    loop:true,
                    pagination:{
                        el:".swiper-pagination",
                    },
                    autoplay: true
                })
            })
        })
    }
}
</script>

<style lang = "scss" scoped>
    .swiper-container{
        position:relative;
        img{
            width:100%;
            height:100%;
        }
    }
    .swiper-container{
        height:1.8rem;
        img{
            width:3.75rem;
            height:1.8rem;
        }
        .swiper-pagination{
            left:auto;
            width:auto;
            right:10px;
        }
    }
    .swiper-pagination-bullet-active{
        background:#8ca7c4;
    }
</style>
