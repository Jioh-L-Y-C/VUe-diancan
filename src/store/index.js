import Vue from 'vue'
import Vuex from 'vuex'

import orderState from "./order/state"
import orderMutations from "./order/mutations"
import orderActions from "./order/actions"
import orderGetters from "./order/getters"

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        ...orderState
    },
    mutations:{
        ...orderMutations
    },
    actions:{
        ...orderActions
    },
    getters:{
        ...orderGetters
    }
})

