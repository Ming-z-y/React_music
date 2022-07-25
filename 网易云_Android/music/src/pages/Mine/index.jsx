import React, { useEffect, useState, useContext } from 'react'
import './index.css'
import SideBar from '../SideBar'

export default function Mine(props) {
    const [state, setState] = useState({ left: -100 + 'vw', opacity: 0 })
    const [mineStyle, setMineStyle] = useState({})
    useEffect(() => {
        let startX, startY, moveEndX, moveEndY, x, y, scrollTop
        window.addEventListener('scroll', function () {
            scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        })
        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX
            startY = e.touches[0].pageY
            if (startX > 300) {
                setState(e => ({ ...e, left: -100 + 'vw', opacity: 0 }))
                setMineStyle({ backgroundColor: '#f3f3f3' })
            }
        })
        document.addEventListener('touchmove', (e) => {
            moveEndX = e.changedTouches[0].pageX
            moveEndY = e.changedTouches[0].pageY
            x = moveEndX - startX
            y = moveEndY - startY
            if (x > 200 && Math.abs(y) < 100) {
                setState(e => ({ ...e, left: 0, opacity: 1, top: scrollTop + 'px' }))
                setMineStyle({ backgroundColor: '#898484' })
            } else if (x < -200 && Math.abs(y) < 100) {
                setState(e => ({ ...e, left: -100 + 'vw', opacity: 0, top: scrollTop + 'px' }))
                setMineStyle({ backgroundColor: '#f3f3f3' })
            }
        })
    }, [])
    return (
        <div className='MinePage'>
            <SideBar {...state} />
            <div className="cover_mine" style={mineStyle}><div className='info_box info_com'>左滑有精彩内容哦</div></div>
        </div>
    )
}
