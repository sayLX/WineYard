export const isLogin = (state) => state.userInfo ? state.userInfo['state'] : false
export const token = (state) => {
    return state.userInfo ? state.userInfo.token : null
}
export const userInfo = (state) => state.userInfo ? state.userInfo : null
