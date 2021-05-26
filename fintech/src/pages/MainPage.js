import React from 'react'
import AuthButton from '../component/common/AuthButton'
import Header from '../component/common/Header'

const MainPage = () => {

  const openUserAuthPage = () =>{
    let tempwindow = window.open("about:blank");
    let clientId = "d111eca8-79e9-404e-aaa3-1edfd827a481";
    let authPageUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry&state=12345678901234567890123456789012&auth_type=0`;
    tempwindow.location.href = authPageUrl

  }

  return (
    <>
     <Header title="사용자인증"></Header> 
     <AuthButton title="인증받기" handleClick={openUserAuthPage}></AuthButton>
    </>
  )
}

export default MainPage