import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import context from '../../../../context/Context'
import AvatarUrl from '../../../../common/components/AvatarUrl'
import './index.css'

export default function User(props) {
    const ctx = useContext(context)
    return (
        <div className='userBox'>
            <div className="userImg">
                <AvatarUrl width='75.04' />
            </div>
            <div className="nickName">{ctx.nickname}</div>
            <ul>
                <li>{ctx.follows} 关 注</li>
                <li>{ctx.followeds} 粉 丝</li>
                <li>Lv.{ctx.level}</li>
            </ul>
            <div className="addressADay">
                <div className='addressBox circle'>河南濮阳</div>
                <div className='daysBox circle'>村龄153天</div>
            </div>
            <div className="editArrow">
                {/* <EditInfoDiv>编辑资料</EditInfoDiv> */}
                <Link to='/edit' className="editInfo circle">编辑资料</Link>
                <div className="arrow circle iconfont">&#xe763;</div>
            </div>
            {props.children}
        </div>
    )
}
