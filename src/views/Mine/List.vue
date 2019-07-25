<template>
    <div class  = "tuanList">
        <p class = "tuanTitle mb-line-b">影院超值套餐</p>
        <!-- <div class = "title">单人套餐</div> -->
        <mt-cell
            :title="good.title"
            :label="'￥'+good.price"
            v-for="good in goods" 
            :key="good.dealId"
        >
        <mt-button type = "danger" size = "small" @click = "addGoodInCar(good)">购买</mt-button>
        <div class = "firstTitle">{{good.firstTitle}}</div>
        <img width ="70" height = "70" slot="icon" :src="good.imageUrl" alt="">
        </mt-cell>
    </div>
</template>

<script>
import {mapActions} from "vuex"
export default { 
    data(){
        return{
            goods:[],
        }
    },
    methods:{
        ...mapActions(["addGoodInCar"]),
        getGoods(){
            this.$http.get("/api/goods.json").then(res=>{
                // console.log(res.data.CommodityList)
                this.goods = res.data.dealList;
            })
        }
    },
    created(){
        // console.log(res)
        this.getGoods()
    }
}
</script>

<style lang = "scss">
    .mint-cell-label{
        font-size:18px;
        color: #f03d37;
        position: relative;
        margin: 50px 15px 0 97px;
        /* height: 92px; */
        overflow: hidden;
    }
    .tuanList{
        margin-top:0.5rem!important;
        position: relative;
        margin: 0 15px 0 15px;
        font-size: 14px;
        color: #777;
            .tuanTitle{
                line-height: 45px;
                height: 45px;
                font-size: 15px;
                color: #666;
            }
        }
    .mint-cell-title{
        /* position: absolute; */
        bottom: 0;
        left: 0;
    }
    .mint-cell-text{
        height: 38px;
        margin: 17px 15px 0 102px;
        font-size: 14px;
        line-height: 18px;
        color: #333;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .mint-cell:last-child{
        /* border-bottom:0.1rem solid #d6d6d6; */
        margin-bottom: 57px;
    }
    .mint-cell{
        margin-bottom:10px;
        /* border-bottom:0.01rem solid #d6d6d6; */
        img{
            display: inline-block;
            width: 92px;
            height: 92px;
            float:left;
            margin-top:14px;
        }
    }
    .firstTitle{
        position: absolute;
        left: 112px;
        top: 60px;
        display: inline-block;
        vertical-align: top;
        margin-top: 1px;
        margin-right: 7px;
        padding: 0 4px;
        font-size: 10px;
        line-height: 15px;
        height: 15px;
        background: #f90;
        border-radius: 2px;
        color: #fff;
    }
</style>
