import React  from 'react'
import {useLocation} from "react-router-dom"
import queryString from "query-string"

const AuthResultPage = () => {

  const {search}  = useLocation();
  const {code} = queryString.parse(search);

  return (
    <>
     <p>사용자가 발급받은 사용자 코드는 </p> 
     <p> {code} </p> 
    </>
  )
}

export default AuthResultPage
