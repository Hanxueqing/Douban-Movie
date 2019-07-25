export default{
    computedTotal(state){
        let cars = state.cars;//在同一个module里面可以直接state.cars获取
        let total = {price:0,num:0} //声明一个total对象存放总价和数量
        cars.forEach(item=>{
            total.price += item.price * item.num; //总价等于商品价格乘以数量
            total.num += item.num //总数累加
        })
        total.price = total.price.toFixed(2)*100//向上取整，并保留两位小数
        return total //返回total对象
    }
}