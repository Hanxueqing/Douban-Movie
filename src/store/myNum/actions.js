import {RANDOM_NUM} from "./const"
export default {
    //异步请求来实现数据模拟
    getNumFromBackend(store){
        setTimeout(()=>{
            //获取一个随机数
            let randomNum = Math.floor(Math.random()*100)
            store.commit(RANDOM_NUM,randomNum)//把参数传回给mutations
        },1000)
    }
}