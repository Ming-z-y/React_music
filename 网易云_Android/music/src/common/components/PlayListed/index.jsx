import React from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import './index.css'

export default function PlayListed(props) {
    if (props.playCreated.length != 0) {
        const playCreated = props.playCreated
        return props.type === 'created' ? (
            <div className='playListed_card'>
                <h3 style={{ fontSize: 15, letterSpacing: 2 }}>创建的歌单</h3>
                {
                    playCreated.slice(1, playCreated.length - 1).map(element => {
                        return (
                            <Link className='playlist_container' to={`/playlist/${element.id}`} key={nanoid()}>
                                <div className="playlist_img">
                                    <img src={element.coverImgUrl} alt="playlist_img" style={{ width: 10 + 'vw' }} className='coverImgUrl' />
                                </div>
                                <div className="playlist_info">
                                    <div>{element.name}</div>
                                    <div className='playlist_info_bottom'>{element.trackCount}首，播放{element.playCount}次</div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        ) : props.type === 'loved' ? (
            <div className='playlist_container'>
                <div className="playlist_img">
                    <img src={playCreated[0].coverImgUrl} alt="playlist_img" style={{ width: 10 + 'vw' }} className='coverImgUrl' />
                </div>
                <div className="playlist_info">
                    <div>{playCreated[0].name}</div>
                    <div className='playlist_info_bottom'>{playCreated[0].trackCount}首，播放{playCreated[0].playCount}次</div>
                </div>
            </div>
        ) : props.type === 'collected' ? (
            <div className='playlist_container'>
                <div className='playListed_card'>
                    <h3 style={{ fontSize: 15, letterSpacing: 2 }}>收藏的歌单</h3>
                    <div className='playlist_container' key={nanoid()}>
                        <div className="playlist_img">
                            <img src={playCreated[playCreated.length - 1].coverImgUrl} alt="playlist_img" style={{ width: 10 + 'vw' }} className='coverImgUrl' />
                        </div>
                        <div className="playlist_info">
                            <div>{playCreated[playCreated.length - 1].name}</div>
                            <div className='playlist_info_bottom'>{playCreated[playCreated.length - 1].trackCount}首，播放{playCreated[playCreated.length - 1].playCount}次</div>
                        </div>
                    </div>
                </div>
            </div>
        ) : <h2>loading...</h2>
    } else {
        return <>loading...</>
    }
}
