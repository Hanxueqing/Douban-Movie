<template>
    <div class = "home-banner swiper-container">
        <div class = "loading" v-if = "!banners"></div>
        <div class = "swiper-wrapper" v-else>
            <!-- <div class = "swiper-slide">
                <img width = "100%" src = "https://zos.alipayobjects.com/rmsportal/UQvFKvLLWPPmxTM.png" alt = "">
            </div> -->

            <!-- 通过循环加载数据 -->
            <div
                class = 'swiper-slide'
                v-for = "banner in banners"
                :key = "banner.id"
            >
                <img width = "100%" :src = "getImages(banner.images.small)" alt = "">
            </div>
        </div>
        <div class = "swiper-scrollbar"></div>
    </div>
</template>

<script>
// import axios from "axios"

//引入rem.js文件
// import {getImages} from "../../modules/getImg.js"
import Swiper from "swiper"

export default {
    data(){
        return{
            banners:null
        }
    },
    methods:{
        // 解决403图片缓存问题
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
    },
    created(){
        //出现跨域问题
        this.$http.get("/api/db/in_theaters",{
            params:{
                page:2,
                limit:9
            }
        }).then(res => {
            // console.log(res)
            this.banners = res.data.object_list;//必须要等到 数据改变 引发新的真实dom渲染完成后才会执行的操作
            this.$nextTick(()=>{//在这个函数里面，因为数据改变导致页面生成新的真实dom，全部渲染完成了
                new Swiper(".home-banner",{
                    loop:true,
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
                    autoplay: true,
                    slidesPerView :'4',
                    spaceBetween : 10
                })
            })
            
        })
    }
}
</script>

<style lang = "scss" scoped>
    .swiper-container{
        img{
            margin:10px 0 20px;
            width:0.88rem;
            height:1.25rem;
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
