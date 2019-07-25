<template>
    <div class = "tabitem" @click = "change">
        <span v-if = "!flag"><slot name = "normalImg"></slot></span>
        <span v-else><slot name = "activeImg"></slot></span>
        <!-- class属性绑定 -->
        <span :class = "{active:flag}">{{txt}}</span>
    </div>
</template>

<script>
export default {
    // props:["txt","mark","sel","changeSelected"],

    //绑定自定义事件就不需要接收了
    props:["txt","mark","sel"],

    //计算属性
    computed:{
        flag(){
            if(this.mark === this.sel){
                return true
            }
            return false
        }
    },
    methods:{
        change(){
            //让父组件去更改sel值
            // this.changeSelected(this.mark);

            //自定义事件通信方法
            // this.$emit("changeSelected",this.mark)

            //编程式导航
            this.$router.push("/" + this.mark)
        }
    }
}
</script>

<style lang = "scss" scoped>
    .tabitem{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size:12px;
        img{
            width:30px;
            height:30px;
            margin-bottom:5px;
        }
        .active{
            color:#42bd56
        }
    }
</style>