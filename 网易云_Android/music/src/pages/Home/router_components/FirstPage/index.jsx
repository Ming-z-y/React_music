import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import Context from '../../../../context/Context'
import PlayListed from '../../../../common/components/PlayListed'
import { Base_URL, Id } from '../../../../common/constants/UserData'

export default function FirstPage() {
    const [playCreated, setPlayCreated] = useState([])
    useEffect(() => {
        (async () => {
            const res = await fetch(`${Base_URL}/user/playlist?uid=${Id}`)
            const data = await res.json()
            const { playlist } = data
            const arr = []
            for (const i of playlist) {
                const { name, trackCount, playCount, coverImgUrl, id } = i
                arr.push({ name, trackCount, playCount, coverImgUrl, id })
            }
            setPlayCreated(arr)
        })()
    }, [])
    const ctx = useContext(Context)
    return (
        <div className='firstPageBox'>
            {/* 基本信息 */}
            <div className="basicInfo">
                <div className="basicInfoTop">
                    <div style={{ fontSize: 15 + 'px', fontWeight: 800 }}>基本信息</div>
                    <div className='circle' style={{ width: 70 + 'px', borderRadius: 10 + 'px', lineHeight: 20 + 'px' }}>领取村民证</div>
                </div>
                <p>村龄：153天（2022年02月注册）</p>
                <p>地区：河南濮阳</p>
            </div>
            {/* 音乐品味 */}
            <div className='musicTaste'>
                <div style={{ fontSize: 15 + 'px', fontWeight: 800 }}>音乐品味</div>
                <div className="musicTaste_box">
                    <div className="musicTaste_box_img"></div>
                    <div className="musicTaste_box_right">
                        <p>听歌排行</p>
                        <p style={{ color: '#c2c2c2' }}>积累听歌{ctx.listenSongs}首</p>
                    </div>
                </div>
                <div className="musicTaste_box">
                    <PlayListed type='loved' playCreated={playCreated} />
                </div>
            </div>
            {/* 创建的歌单 */}
            <PlayListed type='created' playCreated={playCreated} />
            {/* 收藏的歌单 */}
            <PlayListed type='collected' playCreated={playCreated} />
            {/* 愿望清单 */}
            <div className="aspirationList">
                <div className="basicInfoTop">
                    <div style={{ fontSize: 15 + 'px', fontWeight: 800 }}>愿望清单</div>
                    <div style={{ width: 70 + 'px', lineHeight: 20 + 'px' }}>发布愿望&gt;</div>
                </div>
            </div>
        </div>
    )
}
