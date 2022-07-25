import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Base_URL } from '../../common/constants/UserData'
import context from '../../context/Context'
import { nanoid } from 'nanoid'
import './index.css'

export default function PlayListDet() {
    const ctx = useContext(context)
    const [playDetInfo, setPlayDetInfo] = useState({})
    const { id } = useParams()
    useEffect(() => {
        (async () => {
            const res = await fetch(`${Base_URL}/playlist/detail?id=${id}`)
            const data = await res.json()
            const { playlist: { name, coverImgUrl, tracks } } = data
            setPlayDetInfo({ name, coverImgUrl, tracks })
        })()
    }, [])
    return playDetInfo.name ? (
        <div className='playlistDet_box'>
            <div className="playlistDet_cover_box">
                <div className="playlistDet_nav">
                    <div className="playlistDet_nav_left_box">
                        <Link to='/home'><i className='iconfont back'>&#xeb09;</i></Link>
                        <div className='playlistDet_nav_title'>歌单</div>
                    </div>
                </div>
                <div className="playlistDet_top_content">
                    <img src={playDetInfo.coverImgUrl} alt="playlistDet_cover" />
                    <div className="playlistDet_top_content_right">
                        <div>{playDetInfo.name}</div>
                        <div className="nickname">{ctx.nickname} &gt;</div>
                    </div>
                </div>
            </div>
            <div className="playlistDet_content">
                {
                    playDetInfo.tracks.map((track) => {
                        return (
                            <div key={nanoid()} className='playDet_info_items'>
                                {track.name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    ) : 'loading。。。'

}
