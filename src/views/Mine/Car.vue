<template>
    <div class  = "tuanList">
        <p class = "tuanTitle mb-line-b">购物列表</p>
        <!-- <div class = "title">单人套餐</div> -->
        <p v-if = "cars.length === 0">
            <img  class = "shoppingCar" src = "../../assets/shoppingcar.png"/>
            <router-link to = "/mine/list" class = "button">点击此处购买商品</router-link>
        </p>
        <div v-else>
            <!-- <mt-cell
                :title="good.title"
                :label="'￥'+good.price+'*'+good.num" 
                v-for="good in cars" 
                :key="good.dealId"
            >
            <mt-button type = "danger" size = "small" @click = "addGoodInCar(good)">+</mt-button>
            <mt-button type = "danger" size = "small" @click = "reduceGoodInCar(good)">-</mt-button>
            <div class = "firstTitle">{{good.firstTitle}}</div>
            <img width ="70" height = "70" slot="icon" :src="good.imageUrl" alt="">
            </mt-cell> -->

            <van-card
                v-for="good in cars"
                :key="good.dealId"
                :num="good.num"
                :tag="good.firstTitle"
                :price="good.price" 
                :title="good.title"
                :desc="curNumberDesc"
                :thumb="good.imageUrl"
                >
                <div slot="footer">
                    <van-button size="mini" class = "van-button van-button--default van-button--mini van-button--round" @click = "addGoodInCar(good)">+</van-button>
                    <van-button size="mini" class = "van-button van-button--default van-button--mini van-button--round van-button-right" @click = "reduceGoodInCar(good)">-</van-button>
                </div>
                
            </van-card>
            <!-- <span>山坡  ss{{computedTotal.price}}</span> -->
        </div>
        <!-- <div>商品总价为：{{}}</div>
        <div>商品总数为：{{computedTotal.num}}</div> -->

        <van-submit-bar 
            :price="computedTotal.price"
            :button-text="'商品总数：' + computedTotal.num"
        >
        </van-submit-bar>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from "vuex"

export default { 
    computed:{
        ...mapState({
            cars:state=>state.myCar.cars
        }),
        ...mapGetters(["computedTotal"])
    },
    methods:{
        ...mapActions(["addGoodInCar","reduceGoodInCar"])
    }
}
</script>

<style lang = "scss" scoped>
    .shoppingCar{
        width: 20%;
        position: absolute;
        top: 160px;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        border-radius: 50%;
    }
    .button{
        position: absolute;
        right: 50%;
        left: 50%;
        margin: auto;
        width: 110px;
        margin-left: -55px;
        top: 250px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 3px 5px;
    }
    .demo-submit-bar .van-submit-bar {
        position: relative;
    }
    .van-submit-bar {
        position: fixed;
        bottom: 57px;
        left: 0;
        z-index: 100;
        width: 100%;
        background-color: #fff;
        -webkit-user-select: none;
        user-select: none;
    }
    .van-submit-bar__bar {
        background-color:#f8f8f8;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
        height: 50px;
        font-size: 14px;
    }
    .van-submit-bar__text {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        padding-right: 12px;
        color: #323233;
        font-weight: 500;
        text-align: right;
    }
    .van-submit-bar__bar {
        font-size: 14px;
    }
    .van-submit-bar__text span {
        display: inline-block;
    }
    .van-submit-bar__text span {
        display: inline-block;
    }
    .van-submit-bar__price {
        color: #f44;
        font-size: 18px;
    }
    .van-submit-bar__button {
        width: 110px;
    }
    .van-button--square {
        border-radius: 0;
    }
    .van-button--large {
        width: 120px;
        height: 50px;
        line-height: 48px;
    }
    .van-button--danger {
        color: #fff;
        background-color: #f44;
        border: 1px solid #f44;
    }
    .van-button {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        /* height: 44px; */
        margin: 0;
        padding: 0;
        font-size: 16px;
        line-height: 42px;
        text-align: center;
        /* border-radius: 2px; */
        -webkit-appearance: none;
        -webkit-text-size-adjust: 100%;
    }
    .van-button::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: #000;
        border: inherit;
            border-top-color: inherit;
            border-right-color: inherit;
            border-bottom-color: inherit;
            border-left-color: inherit;
        border-color: #000;
        border-radius: inherit;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 0;
        content: ' ';
    }
    .van-button--large {
        line-height: 48px;
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
    .van-card{
        display:flex!important;
        padding:5px 6px !important;
    }
    .van-card:last-child{
        margin-bottom: 120px;
    }
    .van-card__tag {
        position: absolute;
        top: 2px;
        left: 0;
        background:rgb(255, 68, 68)
    }
    .van-card__content {
        width:187px;
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        min-height: 90px;
    }
    .van-card__title {
        max-height: 32px;
        font-weight: 500;
        line-height: 16px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .van-card__desc {
        max-height: 20px;
        color: #7d7e80;
        line-height: 20px;
    }
    .van-card {
        color: #323233;
        font-size: 12px;
    }
    .van-tag {
        display: inline-block;
        padding: 0.2em 0.5em;
        color: #fff;
        font-size: 10px;
        line-height: normal;
        border-radius: 0.2em;
    }
    .card__tags .van-tag {
        margin-right: 5px;
    }
    .van-tag::after {
        border-color: currentColor;
        border-radius: 0.4em;
    }
    .van-card__bottom {
        line-height: 20px;
    }
    .van-card__price {
        display: inline-block;
        color: #f44;
        font-weight: 500;
    }
    .van-card__num {
        float: right;
    }
    .van-card__footer {
        -webkit-box-flex: 0;
        -webkit-flex: none;
        flex: none;
        text-align: right;
        position: absolute;
        top: 70px;
        left: 210px;
    }
    .van-button-right{
        margin-left: 73px;
    }
    .card__footer {
        padding-top: 5px;
    }
    .van-card__footer .van-button {
        margin-left: 5px;
    }
    .van-button::before {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        background-color: #000;
        border: inherit;
            border-top-color: inherit;
            border-right-color: inherit;
            border-bottom-color: inherit;
            border-left-color: inherit;
        border-color: #000;
        border-radius: inherit;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 0;
        content: ' ';
    }
    .van-button--mini {
        font-size: 10px;
        line-height: 20px;
    }
    .van-button--default {
        color: #323233;
    }
    .van-card__thumb{
        img{
            width:100%
        }
    }
</style>
