import { UserInfo } from '@/model/UserInfo'

// async function getUserInfo() {
//   const str = await sessionStorage.getItem('user_info')
//   console.log(str)
//   if (str != null) {
//     const userInfo: UserInfo = JSON.parse(str)
//     return userInfo
//   } else {
//     return null
//   }
// }
export default {
  userInfo: sessionStorage.getItem('user_info') ? sessionStorage.getItem('user_info') : null
}
