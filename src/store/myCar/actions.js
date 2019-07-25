import { SYNC_UPDATE } from "./const"
export default {
    initCar(store){
        //获取购物车
        let cars = getCar()
        store.commit(SYNC_UPDATE,cars)
    },
    addGoodInCar(store,goodInfo){//添加商品到购物车
        setTimeout(()=>{
            //获取后台返回来的购物车
            let cars = getCar();//[{}]
            let isHas = cars.some(item => {//判断原来的购物车是否有这个商品
                if (item.dealId === goodInfo.dealId){//如果相等代表添加进来的是同一个商品
                item.num++//商品数++
                return true;}
            })
            if (!isHas) {//说明购物车没有此商品
                goodInfo.num = 1;//商品数赋值为1
                cars.push(goodInfo)//将商品添加到cars数据中
            }
            //通知后台更改cars
            localStorage.cars = JSON.stringify(cars)
            //前段需要通过mutations具体的方法去更改state里面的cars
            store.commit(SYNC_UPDATE, cars)
        },1000)
    },
    reduceGoodInCar(store,goodInfo){
        //获取后台返回来的购物车
        let cars = getCar();
        cars = cars.filter(item=>{
            if (item.dealId === goodInfo.dealId){
                item.num--
                if(item.num<=0) return false
            }
            return true;
        })
        //通知后台更改cars
        localStorage.cars = JSON.stringify(cars)
        //前段需要通过mutations具体的方法去更改state里面的cars
        store.commit(SYNC_UPDATE, cars)
    }

}

function getCar(){
    return JSON.parse(localStorage.cars ? localStorage.cars : "[]")
}