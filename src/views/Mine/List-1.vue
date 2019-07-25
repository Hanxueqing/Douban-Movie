<template>
    <div class = "list">
        list {{_num}}  
        {{doubleNum}}
        <!-- {{$store.getters.doubleNum}} -->
        <button @click = "CHANGE_NUM">点击NUM!</button>
        <!-- <button @click = "getRandom">随机出现num值！</button> -->
        <button @click = "getNumFromBackend">随机出现num值！</button>
    </div>     
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
import {CHANGE_NUM} from "@/store/myNum/const"
export default {
    // data(){ 
    //     return{
    //         num:this.$store.state.num
    //     }
    // },

    // computed:{
    //     num(){
    //         return this.$store.state.num
    //     }
    // },

    // computed:mapState(["num"]),
    computed:{
        /* ...mapState({
            _num:state => {
                return state.num
            }
        }) */
        ...mapState({
            _num:state => state.myNum.num //相当于通过this.$store.state.num来获取num的方法
        }),
        ...mapGetters(["doubleNum"])
    },
    methods:{
        /* changeNum(){
            // console.log(this.$store)
            this.$store.commit("changeNum")
        } */
        // ...mapMutations(["changeNum"])
        /* getRandom(){
            //派发action
            this.$store.dispatch("getNumFromBackend")
        }, */
        ...mapMutations([CHANGE_NUM]),
        ...mapActions(["getNumFromBackend"])
        
    },
    created(){
        // console.log(this)
    }
}
</script>

<style>

</style>
