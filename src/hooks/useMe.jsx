import { useState } from "react"
import useToken from "./useToken"


const useMe = () => {
  const {token, removeToken} = useToken()

  const getMe = () => {
    if (!token) {
      return null
    }
    return token
  }
  const [me, setMe] = useState(getMe())

  const removeMe = () => {
    removeToken()
    setMe(null)
    return me
  }

  return {
    me,
    removeMe
  }
}

export { useMe }