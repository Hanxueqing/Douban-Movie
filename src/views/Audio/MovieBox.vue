<template>
    <div class = "moviebox"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
    >
        <div class="loading" v-if="!movies"></div>
        <MovieItem
            v-else
            v-for = "(movie,index) in movies"
            :key = "movie.id"
            :movie = "movie"
            :index = "index"
        ></MovieItem>
    </div>
</template>

<script>
import MovieItem from "./MovieItem"
export default {
    watch:{
        type(){
            this.movies = [];
            this.page = 1;//切换的时候从第一页开始切换
            this.hasMore = true;
            this.getMovies();
        }
    },
    data(){
        return{
            // movies:null,
            movies:[],//数组支持累加操作
            // genres:[],
            loading:false,
            limit:20,
            page:1,
            hasMore:true //是否有更多数据，默认有更多数据
        }
    },
    //进入组件的时候执行
    activated(){
        this.loading = false;//继续开启无限滚动
    },
    //离开组件的时候执行
    deactivated(){
        this.loading = true;//关闭无限滚动
    },
    methods:{
        loadMore(){
            // console.log("loadmore")
            if(!this.hasMore){
                //没有更多数据的时候提示用户
                /* vant.Toast({
                    message: '我是有底线的',
                    position: 'bottom',
                    duration: 3000,
                }) */
                this.loading = true //没有更多数据的时候关闭无限滚动，同时返回false，不执行接下来的操作
                return false
            }
            this.getMovies();
        },
        getMovies(){
            //关闭无限滚动
            this.loading = true;
            /* let page = this.page;
            let limit = this.limit; */
            const toast1 = vant.Toast.loading({
                message: '正在加载中',
                duration: 0,
            })
            // 解构的写法
            let{page,limit} = this;
            this.$http.get("/douban/my/movies" ,{
                params:{
                    limit,
                    page
                }
                }).then(res=>{
                    // this.movies = res.data.object_list

                    //在原来的基础上拼接数组，并且返回新数组
                    this.movies = this.movies.concat(res.data.data.object_list)
                    // this.genres = this.movies[0].genres
                    //开启无限滚动
                    this.loading = false;

                    // instance.close();//关闭Toast提示框

                    toast1.clear();
                    if(this.limit * this.page >= 20){ //判断是否有更多数据
                        this.hasMore = false //没有更多数据时将hasMore赋值为false，返回false，不执行接下来的page++
                        return false
                    }
                    this.page++
                })
        }
    },
    // created(){
    //     this.$http.get("/api/db/in_theaters",{
    //         params:{
    //             limit:6
    //         }
    //     }).then(res=>{
    //         this.movies = res.data.object_list
    //     })
    // },
    components:{
        MovieItem
    }
}   
</script>

<style>
    .moviebox{
        /* top:94px; */
        position:relative;
        /* margin-bottom:40px; */
    }
</style>
