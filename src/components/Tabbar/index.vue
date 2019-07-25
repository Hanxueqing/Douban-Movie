<template>
    <div class = "tabbar">
        <!-- 属性值绑定写法 -->
        <!-- <TabItem txt = "首页" mark = "home" :sel = "selected" :changeSelected = "changeSelected"> -->
        
        <!-- 绑定自定义事件写法 -->
        <!-- <TabItem txt = "首页" mark = "home" :sel = "selected" @changeSelected = "changeSelected"> -->

        <!-- 直接获取this.$route.name值，不需要再传方法过去 -->
        <!-- <TabItem txt = "首页" mark = "home" :sel = "selected">
            <img slot = "normalImg" src = "../../assets/ic_tab_home_normal.png" alt = "">
            <img slot = "activeImg" src = "../../assets/ic_tab_home_active.png" alt = "">
        </TabItem>
        <TabItem txt = "书影音" mark = "audio" :sel = "selected">
            <img slot = "normalImg" src = "../../assets/ic_tab_audio_normal.png" alt = "">
            <img slot = "activeImg" src = "../../assets/ic_tab_audio_active.png" alt = "">
            </TabItem>
        <TabItem txt = "广播" mark = "broadcast" :sel = "selected">
            <img slot = "normalImg" src = "../../assets/ic_tab_broadcast_normal.png" alt = "">
            <img slot = "activeImg" src = "../../assets/ic_tab_broadcast_active.png" alt = "">
        </TabItem>
        <TabItem txt = "小组" mark = "group" :sel = "selected">
            <img slot = "normalImg" src = "../../assets/ic_tab_group_normal.png" alt = "">
            <img slot = "activeImg" src = "../../assets/ic_tab_group_active.png" alt = "">
        </TabItem>
        <TabItem txt = "我的" mark = "mine" :sel = "selected">
            <img slot = "normalImg" src = "../../assets/ic_tab_mine_normal.png" alt = "">
            <img slot = "activeImg" src = "../../assets/ic_tab_mine_active.png" alt = "">
        </TabItem> -->

        <TabItem
            v-for="foot in footers"
            :key = "foot.id"
            :txt = "foot.txt"
            :sel = "selected"
            :mark = "foot.mark"
        >
            <img slot = "normalImg" :src = "foot.normalImg" alt = "">
            <img slot = "activeImg" :src = "foot.activeImg" alt = "">
        </TabItem>
    </div>
</template>

<script>
import TabItem from "./TabItem"
export default {
    data(){
        return{
            selected:this.$route.name,
            // footers:[
            //     {id:1,txt:"首页",mark:"home",normalImg:"../../assets/ic_tab_home_normal.png",activeImg:"../../assets/ic_tab_home_active.png"},
            //     {id:2,txt:"书影音",mark:"audio",normalImg:"../../assets/ic_tab_audio_normal.png",activeImg:"../../assets/ic_tab_audio_active.png"},
            //     {id:3,txt:"广播",mark:"broadcast",normalImg:"../../assets/ic_tab_broadcast_normal.png",activeImg:"../../assets/ic_tab_broadcast_active.png"},
            //     {id:4,txt:"小组",mark:"group",normalImg:"../../assets/ic_tab_group_normal.png",activeImg:"../../assets/ic_tab_group_active.png"},
            //     {id:5,txt:"我的",mark:"mine",normalImg:"../../assets/ic_tab_mine_normal.png",activeImg:"../../assets/ic_tab_mine_active.png"}
            // ]

            footers:[
                {id:1,txt:"首页",mark:"home",normalImg:require("../../assets/ic_tab_home_normal.png"),activeImg:require("../../assets/ic_tab_home_active.png")},
                {id:2,txt:"书影音",mark:"audio",normalImg:require("../../assets/ic_tab_audio_normal.png"),activeImg:require("../../assets/ic_tab_audio_active.png")},
                {id:3,txt:"广播",mark:"broadcast",normalImg:require("../../assets/ic_tab_broadcast_normal.png"),activeImg:require("../../assets/ic_tab_broadcast_active.png")},
                {id:4,txt:"小组",mark:"group",normalImg:require("../../assets/ic_tab_group_normal.png"),activeImg:require("../../assets/ic_tab_group_active.png")},
                {id:5,txt:"我的",mark:"mine",normalImg:require("../../assets/ic_tab_mine_normal.png"),activeImg:require("../../assets/ic_tab_mine_active.png")}
            ]
        }
    },
    methods:{
        // changeSelected(val){
        //     this.selected = val;
        // }
    },
    components:{
        TabItem
    }
}
</script>

<style lang = "scss" scoped>
    .tabbar{
        position:fixed;
        z-index:10;
        bottom:0;
        left:0;
        height:60px;
        width:100%;
        display:flex;
        border-top:1px solid #ccc;
        background:#fff;
        display:flex;
        align-items:center;
    }
</style>
