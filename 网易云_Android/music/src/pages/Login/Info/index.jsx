import React, { useEffect, useState } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default function Info(props) {
    const [opacity, setOpacity] = useState({ opacity: 1 })
    useEffect(() => {
        PubSub.subscribe('info', (_, data) => {
            console.log('@@@');   // 奇怪这里不可以执行
            setInfo(data)
        })
    }, [])   // 无解  ？？？
    useEffect(() => {
        setTimeout(() => {
            setOpacity((e) => ({ ...e, opacity: 0 }))
        }, 200);
    }, [])
    return (
        <div className='info_box' style={opacity}>{props.children}</div>
    )
}
