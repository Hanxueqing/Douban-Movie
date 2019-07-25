<template>
    <div class = "moviedetail">
        <!-- 解决图片未加载，拿不到数据的错误 -->
        <div class = "loading" v-if = "!movie"></div>
        <div v-else>
            <mt-header fixed :title="movie.title">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class = "movie-header">
                <div class = "movie">
                    <div class = "movie-background"></div>
                    <div class = "movie-filter"></div>
                    <div class = "movie-container">
                        <div class = "movie-cover">
                            <img width="100%" :src = "getImages(movie.images.small)" alt="">
                        </div>
                        <div class = "movie-content">
                            <div class = "movie-name">
                                <span>{{movie.title}}</span>
                            </div>
                            <div class = "movie-ename">{{movie.original_title}}</div>
                            <div class = "score-num">
                                <span>{{movie.rating.average}}分</span>
                                <div class = "score-num-p">
                                    <span>(</span>
                                    <span>{{movie.collect_count}}</span>
                                    <span>人评分）</span>
                                </div>
                            </div>
                            <div class = "movie-category">
                                <span class = "movie-cat">类型：{{movie.genres[0]}}</span>
                                <div class = "movie-tag">
                                    <!-- <span class = "d">{{movie.durations}}</span> -->
                                    <!-- <span class = "imax">IMAX</span> -->
                                </div>
                            </div>
                            <div class = "movie-content-row">
                                <!-- <span>{{movie.durations}} </span> -->
                                <!-- <span>{{movie}}</span> -->
                                <!-- <span>分钟</span> -->
                            </div>
                            <div class = "movie-content-time">上映时间：{{movie.year}}年</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class = "section-seperate" >
                <button class = "btn-block">
                    <span>特惠购票</span>
                </button>
                <div class = "text-expander">
                    <div class = "text-summary">{{movie.summary}}</div>
                </div>
            </div>
            <div class = "section-tips">
                <p>观影小贴士</p>
                <div class = "tip">
                    <img width="30" height="30" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559656895308&di=659549c667ba3026330be6a7dab81ef7&imgtype=0&src=http%3A%2F%2Fp1.qhimg.com%2Ft019fe80350d046ade8.jpg" alt="">
                    <span>有一个彩蛋，在片尾曲后出现</span>
                </div>
            </div>
            <div class = "section-movie-celebrities">
                <a class = "link-more-text" href="">
                    <p>全体职员人员</p>
                </a>
                <ul class = "movie-celebrities">
                    <li
                        v-for = "director in movie.directors"
                        :key = "director.id"
                    >
                        <a href="">
                            <img :src = "getImages(director.avatars.small)" alt="">
                            <span>{{director.name}}</span>
                            <span>{{director.name_en}}</span>
                        </a>
                    </li>
                    <li
                        v-for = "cast in movie.casts"
                        :key = "cast.id"
                    >
                        <a href="">
                            <img :src = "getImages(cast.avatars.small)" alt="">
                            <span>{{cast.name}}</span>
                            <span>{{cast.name_en}}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class = "load-wrapper">
                <a href="">下载猫眼电影，查看更多电影信息</a>
            </div>
            <div class = "footer">
                <span>猫眼电影 客服电话：1010-5335</span>
                <p>京ICP备16022489号-1 京公网安备11010502030881号</p>
                <p>北京猫眼文化传媒有限公司</p>
            </div>
        </div>
        
    </div>
</template>

<script>
// import Banner from "@/components/DetailBanner"
// import getImages from "@/modules/getImg"
export default {
    data(){
        return {
            movie: null,
        }
    },
    components:{
        // Banner,
    },
    methods:{
        // getImages,
        getImages( _url ){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        },
        getMovie(){
            this.$http.get("/api/db/movie_detail/" + this.$route.params.id).then(res => {
                this.movie = res.data
                // console.log(res.data)
                // console.log(this.$route.params.id)
            })
        }
    },
    created(){
        this.getMovie()
    }
}
</script>

<style lang="scss" scoped>
    .text-summary{
        padding-bottom: 15px;
    }
    .movie-header{
        margin-top:0.5rem;
        width: 100%;
        height: 188px;
        padding: 0;
        background: #f4f4f4;
        border-bottom: none;
        display: blick;
        .movie{
            width: 100%;
            height: 188px;
            color: #fff;
            padding: 16px;
            line-height: 1;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            filter: blur(0);
            .movie-background{
                background-image: url(http://p0.meituan.net/177.249/movie/71fba05fbe4912cb70d27b87c3c856393364925.jpg);
                z-index: 0;
                -webkit-filter: blur(.6rem);
                background-size: cover;
                background-repeat: no-repeat;
                background-position-y: 40%;
                top: 0;
                right: 0;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
            }
            .movie-filter{
                background-color: #40454d;
                opacity: .55;
                top: 0;
                right: 0;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: 0;
            }
            .movie-container{
                z-index: 1;
                position: relative;
                .movie-cover{
                    float: left;
                    width: 112px;
                    height: 156px;
                    font-style: initial;
                    -webkit-filter: blur(0);
                    
                    position: relative;
                    img{
                        border: 1px solid #f0f2f3;
                    }
                }
                .movie-content{
                    z-index: 2;
                    padding-left: 20px;
                    padding-top: 5px;
                    overflow: hidden;
                    div{
                        margin-bottom:10px;
                    }
                    .movie-name{
                        font-size: 20px;
                        margin-top: 4px;
                        margin-bottom: 4px;
                    }
                    .movie-ename{
                        opacity: .7;
                        font-size: 12px;
                    }
                    .score-num{
                        font-size: 18px;
                        color: #ffc600;
                        margin: 4px 0;
                        .score-num-p{
                            color: #fff;
                            font-size: 12px;
                            opacity: .7;
                            margin: 3px 0;
                        }
                    }
                    .movie-category{
                        opacity: .7;
                        font-size: 13px;
                        margin: 4px 0;
                        .movie-tag{
                            margin: 3px 0;
                        }
                    }
                    .movie-category{
                        opacity: .7;
                        font-size: 13px;
                        margin: 4px 0;
                    }
                    .movie-content-row{
                        opacity: .7;
                        font-size: 13px;
                        margin: 4px 0;
                    }
                    .movie-content-time{
                        opacity: .7;
                        font-size: 13px;
                        margin: 4px 0;
                    }
                }
            }
        }
    }
    .section-seperate{
        width: 100%;
        // height: 250px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        margin:10px 0;
        overflow: hidden;
        padding: 0 20px;
        .btn-block{
            display: block;
            margin: 10px auto;
            width: 100%;
            height: 36px;
            font-size: 16px;
            border: 1px solid #e54847;
            border-radius: 4px;
            line-height: 1;
            background: #e54847;
            span{
                color: #fff;
            }
        }
        .text-expander{
            // width: 370px;
            // height: 202px;
            margin: 0  auto;
            // padding: 2px 23px;
        }
    }
    .section-tips{
        width: 100%;
        height: 87px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        margin: 10px 0;
        p{
            font-weight: 400;
            color: #666;
            font-size: 15px;
            padding: 10px 15px;
            border-bottom: 1px solid #e5e5e5;
        }
        .tip{
            //padding-top: 5px;
            margin-left: 15px;
            img{
                float: left;
            }
            span{
                float: left;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                padding-top: 10px;
                margin-left: 10px;
            }
        }
    }
    .section-movie-celebrities{
        width: 100%;
        height: 208px;
        margin: 10px 0;
        border-top: 1px solid #e5e5e5;
        // border-bottom: 1px solid #e5e5e5;
        .movie-celebrities{
            padding: 15px 10px;
            white-space: nowrap;
            box-sizing: border-box;
            border-bottom: 1px solid #e5e5e5;
            li{
                width: 71px;
                // height: 136px;
                text-align: center;
                display: inline-block;
                img{
                    width: 67px;
                    height: 93px;
                }
                span{
                    display: block;
                    font-size: 13px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
        .link-more-text{
            display: block;
            p{
                display: block;
                text-align: center;
                margin-top: 17px;
                font-size: 15px;
            }
        }
    }
    .section-media{
        width: 100%;
        height: 130px;
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        margin: 10px 0;
        h3{
            color: #666;
            font-size: 13px;
            margin-top: 12px;
            margin-left: 15px;
            margin-bottom: 15px;
            font-size: 15px;
        }
        .movie-stages{
            padding-left: 15px;
            .stage-img-container{
                width: 93px;
                height: 72px;
                display: inline-block;
                margin-left: 2px;
                a{
                    display: block;
                    img{
                        width: 93px;
                        height: 72px;
                    }
                }
            }
        }
    }
    .load-wrapper{
        width: 345px;
        height: 36px;
        background: #e54847;
        border: 1px solid #e54847;
        border-radius: 4px;
        margin: 0 auto;
        a{
            display: block;
            text-align: center;
            margin-top: 9px;
            color: #fff;
            font-size: 13px;
        }
    }
    .footer{
        width: 100%;
        height: 90px;
        margin-bottom: 20px;
        span{
            display: block;
            width: 200px;
            height: 20px;
            margin: 10px auto;
            font-size: 13px;
        }
        p{
            display: block;
            width: 300px;
            height: 20px;
            margin: 5px auto;
            font-size: 10px;
            text-align: center;
        }
    }
    .mint-header{
        height:0.5rem;
        background:gray;
    }
</style>
