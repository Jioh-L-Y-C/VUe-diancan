export default {
    currentUser() {
        return getters.currentUser
    },
    isLogin() {
        return getters.isLogin
    },
    //改变登录状态
    SETcurren(state, payload) {
        //在判断payload是否存在
        if (payload) {
            state.currentUser = payload
            state.isLogin = true
        } else {
            state.currentUser = null
            state.isLogin = false
        }
    },
	 // 将新添加的商品push到menuItems中
    pushToMenuItems(state, payload){
        state.menuItems.push(payload)
    },
    // 请求数据
    setMenuItems(state,payload){
        state.menuItems = payload;
    },
    removeMenuItems(state,payload){
        state.menuItems.forEach((item,index)=>{
            if(item == payload){
                state.menuItems.splice(index, 1);
            }
        })
    }
}