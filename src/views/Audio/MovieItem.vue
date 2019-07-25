<template>
    <div class = "movieitem">
        <div class = "main_block">
            <div class = "img-box">
                <img width = "100%" v-lazy = "getImages(movie.images.small)" alt = "">
            </div>
            <div class = "info">
                <div class = "info-left">
                    <div class = "title line-ellipsis">{{movie.title}}</div>
                    <div class = "detail">
                        <div class = "count line-height">播放量<span class = "sc">{{movie.collect_count | filterData}}</span></div>
                        <div class = "actor line-height line-ellipsis">
                            <span class = "a_title">导演:</span>
                            <span class = "a_star line-ellipsis">{{movie.directors[0].name}}</span>
                        </div>
                        <div
                            class = "rating line-height">
                            类型：{{movie.genres[0]}}  {{movie.genres[1]}}  {{movie.genres[2]}}
                        </div>
                        <div class = "rating line-height">评分：{{movie.rating.average}}</div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
</template>

<script>
import getImages from "@/modules/getImg"
export default {
    props:{
        movie:Object,
        index:Number
        // genres:Object
    },
    // created(){
    //     console.log(getImages)
    // },
    methods:{
        getImages
        // 解决403图片缓存问题
        // getImages( _url ){
        //     if( _url !== undefined ){
        //         let _u = _url.substring( 7 );
        //         return 'https://images.weserv.nl/?url=' + _u;
        //     }
        // }
    },
    filters:{
        filterData(data){
            // console.log(typeof data) //num数字类型
            if(data > 10000){
                data = data /10000;
                data = data.toFixed(1)
                data += "万"
            }
            return data;
        }
    }
}
</script>

<style lang = "scss" scoped>
    .movieitem:last-child{
        margin-bottom:80px;
    }
    .movieitem{
        /* position: absolute; */
        margin-left: 2%;
        width: 176px;
        height: 360px;
        float: left;
        padding-left: 26px;
        /* height:114px; */
        padding-left:15px;
         margin-bottom: 15px;
        .main_block{
            position:relative;
            /* height:100%; */
            width:100%;
            .img-box{
                width: 150px;
                height: 222px;
                position: relative;
                margin-top: 12px;
                /* float: left; */
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
        .info{
            height:114px;
            /* border-bottom:.1px solid gray; */
            margin-bottom:10px;
            margin-right:15px;
            padding: 12px 14px 12px 0;
            /* margin-left: 86px; */
            position: relative;
            .info-left{
                padding-right: 5px;
                /* margin-right: 48px; */
                overflow: hidden;
                .title{
                    max-height:24px;
                    /* margin-bottom:7px; */
                    line-height:24px;
                    overflow:hidden;
                    font-size: 17px;
                    color: #333;
                    font-weight: 700;
                    padding-right: 5px;
                    flex-shrink: 1;
                }
                .actor{
                    white-space: nowrap;
                }
                .detail{
                    box-sizing: border-box;
                    line-height: 1;
                    overflow: hidden;
                    font-size:13px;
                    .count{
                        font-size:13px;
                        color:#666;
                        .sc{
                            font-weight:700;
                            color:#faaf00;
                            font-size:15px;
                        }
                    }
                }
            }
            .info-right{
                height:100%;
                font-size: 12px;
                position: absolute;
                right: 14px;
                top: 12;
                bottom: 0;
                margin: auto;
                width:47px;
                .btn{
                    position:absolute;
                    left:0;
                    top:0;
                    bottom:0;
                    right:0;
                    margin:auto;
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    box-sizing: border-box;
                    background-color: #f03d37;
                    color: #fff;
                    border-radius: 4px;
                    white-space: nowrap;
                    font-size: 12px;
                    cursor: pointer;
                }
                .btn-b{
                    background-color: #3c9fe6;
                }
            }
        }
        .line-ellipsis {
            width:100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .line-height{
            line-height:15px;
            margin-top:6px;
        }
        .sc{
            margin-left : 5px;
        }
    }
</style>