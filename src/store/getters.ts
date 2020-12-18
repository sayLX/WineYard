export const isLogin = async (state) => {
    const userInfo = await state.userInfo
    if (userInfo) {
        const isLogin = state.userInfo['state']
        return isLogin
    }
    return null
}
export const token = (state) => {
    return state.userInfo ? state.userInfo.token : null
}
export const userInfo = (state) => state.userInfo ? state.userInfo : null
