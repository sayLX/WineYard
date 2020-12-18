import { UserInfo } from "@/model/UserInfo"
export default { 
    login (state, userInfo: UserInfo) {
        state.userInfo = userInfo
    }
 }
