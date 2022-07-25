import React, { useRef, useState } from 'react'
import './index.css'
import history from './history'
import logoImg from '../../assets/logo.png'
import { Base_URL } from '../../common/constants/UserData'
import Info from './Info'

function Login() {
    const [info, setInfo] = useState('退出登录或者登录过期')
    const phoneRef = useRef()
    const passwordRef = useRef()
    const loginFun = async (value) => {
        if (value.phone != '' && value.password != '') {
            try {
                const res = await fetch(`${Base_URL}/login/cellphone?phone=${value.phone}&password=${value.password}`)
                const data = await res.json()
                if (data.message === "网络太拥挤，请稍候再试！") {
                    alert('网络太拥挤，请稍候再试！');
                }
                if (data.cookie) {
                    alert('登录成功');
                    localStorage.setItem('cookie', data.cookie)
                    history.push('/home')
                    window.location.reload()
                }
            } catch {
                console.log('error');
                console.log('登录失败');
            }
        }
    }
    return (
        <div className='loginBox'>
            <Info>{info}</Info>
            <div className="logo_box">
                <img src={logoImg} alt="logoImg" />
            </div>
            <div className="login_Box">
                <div className="phonePass_box">
                    <input type="text" ref={phoneRef} placeholder='请输入手机号' />
                </div>
                <div className='phonePass_box'>
                    <input type="password" ref={passwordRef} placeholder='请输入密码' />
                </div>
                <button onClick={() => loginFun({ phone: phoneRef.current.value, password: passwordRef.current.value })}>登录</button>
            </div>
        </div>
    )
}
export default Login