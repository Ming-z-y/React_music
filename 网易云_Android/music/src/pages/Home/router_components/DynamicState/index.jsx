import React, { useEffect, useState, useContext } from 'react'
import { nanoid } from 'nanoid'
import AvatarUrl from '../../../../common/components/AvatarUrl'
import { Base_URL, Id } from '../../../../common/constants/UserData'
import Context from '../../../../context/Context'
import DynamicFuns from './components/DynamicFuns'
import './index.css'

export default function DynamicState() {
    const [dynamicState, setDynamicState] = useState([])
    useEffect(() => {
        (async () => {
            const res = await fetch(`${Base_URL}/user/event?uid=${Id}`)
            const data = await res.json()
            const handDataArr = data.events.map(e => JSON.parse(e.json))
            setDynamicState(handDataArr)
        })()
    }, [])
    const ctx = useContext(Context)
    return (
        <div className='dynamicStateBox'>
            {
                dynamicState.map(e => {
                    return e.msg !== '' ? <div key={nanoid()} className='dynamicStateBox_inner'>
                        <AvatarUrl width='40' height='40' />
                        <div className='dynamicStateBox_inner_right'>
                            <div style={{ color: 'black' }}>{ctx.nickname}</div>
                            <div className='content_box'>{e.msg}</div>
                            <DynamicFuns />
                        </div>
                    </div> :
                        <div className='dynamicStateBox_inner' key={nanoid()}>
                            <AvatarUrl width='40' height='40' />
                            <div className='dynamicStateBox_inner_right'>
                                <div>{ctx.nickname}</div>
                                <div className='imgCover_box'>
                                    <img src={e.song.img80x80} key={nanoid()} alt="cover_img" className='cover_img' />
                                    <div className='imgCover_box_right'>
                                        <div>{e.song.name}</div>
                                        <div style={{ marginTop: 3 + 'px', color: '#cbc5c5' }}>{e.song.artists[0].name}</div>
                                    </div>
                                </div>
                                <DynamicFuns />
                            </div>
                        </div>
                })
            }
        </div>
    )
}
