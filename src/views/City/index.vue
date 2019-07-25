<template>
    <section class = "city-list-container">
        <section>
            <div class = 'city-title'>
                定位城市
            </div>
            <div class = "city-list city-list-inline">
                <div class = "location-city location-width">定位失败，请点击重试</div>
            </div>
        </section>
        <section style = "height:230px">
            <div class = 'city-title'>
                热门城市城市
            </div>
            <div class = "city-list city-list-inline">
                <div 
                    class = "location-city city-float"
                    v-for = "city in cities"
                    :key = "city.id">
                    {{city.title}}
                </div>
            </div>
        </section>
        <section>
            <div class = 'city-title'>
                城市列表
            </div>
            <div class = "city-list city-list-inline">
                <div 
                    class = "whole-city"
                    v-for = "wholeCity in wholeCities"
                    :key = "wholeCity.id">
                    {{wholeCity.nm}}
                </div>
            </div>
        </section>
    </section>   
</template>

<script>
export default {
    data(){
        return{
            cities:[
                {id:1,title:"上海"},
                {id:2,title:"北京"},
                {id:3,title:"广州"},
                {id:4,title:"深圳"},
                {id:5,title:"武汉"},
                {id:6,title:"天津"},
                {id:7,title:"西安"},
                {id:8,title:"南京"},
                {id:9,title:"杭州"},
                {id:10,title:"成都"},
                {id:11,title:"重庆"},
            ],
            hasMore:true,
            page:1,
            limit:1130,
            wholeCities:[]
        }
    },
    created(){
        //解构page和limit
        let{page,limit} = this;
        //关闭无限滚动
        this.loading = true;
        //请求数据
        this.$http.get("/data/my/cities",{
        params:{
            page,
            limit
        }
        }).then(res=>{
            this.wholeCities = this.wholeCities.concat(res.data.data.object_list);
            this.loading = false;
            //关闭加载框
            toast1.clear();
            if(this.limit * this.page >= res.data.data.total){
                this.hasMore = false
                return false
            }
            this.page++;
        })
        const toast1 = vant.Toast.loading({
            message: '正在加载中',
            duration: 0,
        })
    },
}
</script>

<style lang = "scss" scoped>
    .city-title{
        padding-left: 15px;
        line-height: 30px;
        background:#f5f5f5;
    }
    .city-list-inline{
        background-color: #f5f5f5;
        padding-bottom: 8px;
        .location-city{
            width: auto;
            min-width: 30%;
            padding: 0 20px;
        }
        .location-city{
            
            background: #fff;
            width: 29%;
            height: 33px;
            margin-top: 15px;
            margin-left: 3%;
            padding: 0 4px;
            border: 1px solid #e6e6e6;
            border-radius: 3px;
            line-height: 33px;
            text-align: center;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .city-list{
        padding-right: 30px;
        background:#fff;
    }
    .city-float{
        float: left;
    }
    .whole-city{
        height: 44px;
        line-height: 44px;
        margin-left: 15px;
        border-bottom: 1px solid #c8c7cc;
    }
    .location-width{
        width:55% !important;
    }
</style>
