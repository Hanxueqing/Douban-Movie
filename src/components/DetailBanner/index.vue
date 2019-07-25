<template>
    <div class = "movie-banner swiper-container">
        <div class = "swiper-wrapper">
            <div 
                class = "swiper-slide" 
                v-for="(photo,index) in photos"
                :key = "index"
            >
                <img width = "93" height = "72" :src="photo" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return {
            photos:[]
        }
    },
    created(){
        this.$http.get("api/db/movie_detail/" + this.$route.params.id).then(res => {
            this.photos = res.data.object_list[0].photos
            this.$nextTick(()=>{
                console.log("aaaa")
                new Swiper(".movie-banner",{
                    loop: true,
                    slidesPerView: 4
                })
            })
        })
    }
}
</script>

<style lang="scss" scoped>
    .swiper-wrapper{
        width: 93px;
        height: 72px;
        .swiper-slide{
            width: 93px;
            height: 72px;
            display: block;
            img{
                padding-left: 10px;
                width:93px;
                height:72px;
            }
        }
    }
    .swiper-container{
        position:relative;
        top:0;
    }
</style>
