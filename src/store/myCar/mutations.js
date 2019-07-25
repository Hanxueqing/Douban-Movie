import { SYNC_UPDATE} from "./const"
export default{
    [SYNC_UPDATE](state,newCar){
        state.cars = newCar;
    }
}
