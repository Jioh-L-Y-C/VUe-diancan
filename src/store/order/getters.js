export default {
    //获取属性的状态
    currentUser(state) {
        return state.currentUser
    },
    isLogin(state) {
        return state.isLogin
    }, 
	getMenuItems(state, getters) {
        return state.menuItems
    }
}