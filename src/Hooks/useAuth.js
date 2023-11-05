import { useSelector } from 'react-redux'

export default function useAuth() {
    const auth = useSelector((state) => state.auth)
if(auth?.accessToken && auth.user){
  console.log("useAuth: ", auth)
    return true
  }else{
    return false
  }
}