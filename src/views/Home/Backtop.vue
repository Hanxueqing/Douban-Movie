<template>
    <!-- <div class="back-top-box" v-if = "isShow" @click = "backTop"> -->
    <div class="back-top-box" v-if = "isShow" v-backtop>
        <div class="back-top">
            <i class = "fa fa-arrow-up"></i>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        listenScroll(){
            let sTop = document.documentElement.scrollTop || document.body.scrollTop
            //避免重复触发
            if(sTop >= 200 && !this.isShow){
                this.isShow = true;
            }else if(sTop < 200 && this.isShow){
                this.isShow = false;
            }
        },
    },
    activated(){
        window.addEventListener("scroll",this.listenScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.listenScroll)
    },
    // created(){
    //   window.addEventListener("scroll",e=>{
    //     let sTop = document.documentElement.scrollTop || document.body.scrollTop
    //     console.log(sTop)
    //     if(sTop >= 330 && !this.isShow){
    //           this.isShow = true;
    //       }else if(sTop < 200 && this.isShow){
    //           this.isShow = false;
    //       }
    //   })
    // }
}
</script>

<style lang = "scss" scoped>
    .back-top-box{
        position:fixed;
        z-index:20;
        right:20px;
        bottom:80px;
        width:.4rem;
        height:.4rem;
        background:rgba(0,0,0,.5);
        color:#fff;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        i{
            font-size:20px;
        }
    }
</style>
