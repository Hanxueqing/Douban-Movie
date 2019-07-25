import {CHANGE_NUM,RANDOM_NUM} from "./const"
export default {
    [CHANGE_NUM](state) {
        state.num++
    },
    [RANDOM_NUM](state,randomNum) {
        state.num = randomNum
    }
}