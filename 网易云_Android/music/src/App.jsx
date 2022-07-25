import React, { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'
import { Base_URL, Id } from './common/constants/UserData'
import Context from './context/Context'
import './App.css'

export default function App() {
    const [userInfo, setUserInfo] = useState({
        level: null,
        listenSongs: null,
        avatarUrl: null,
        nickname: null,
        followeds: null,
        follows: null,
        gender: null,
        city: null,
        signature: null,
        province: null,
        birthday: null
    })
    const element = useRoutes(router)
    useEffect(() => {
        (async () => {
            const res = await fetch(`${Base_URL}/user/detail?uid=${Id}&timestamp=${Date.now()}`)
            const data = await res.json()
            const { level, listenSongs, profile: { avatarUrl, nickname, followeds, follows, gender, birthday, city, province, signature } } = data
            setUserInfo({ level, listenSongs, avatarUrl, nickname, followeds, follows, gender, birthday, city, province, signature })
        })()
    }, [])

    return (
        <Context.Provider value={userInfo}>
            {element}
        </Context.Provider>
    )
}
