import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Base_URL } from '../../../common/constants/UserData'
import Context from '../../../context/Context'
import './index.css'

export default function SetGender() {
    const ctx = useContext(Context)
    const changeGenderHandler = async (value) => {
        const res = await fetch(`${Base_URL}/user/update?gender=${value}&signature=${ctx.signature}&city=${ctx.city}&nickname=${ctx.nickname}&birthday=${ctx.birthday}&province=${ctx.province}&timestamp=${Date.now()}`)
        const data = await res.json()
        console.log(data);
    }
    return (
        <div className='setGender_box'>
            <div className="setGender_box_inner">
                <div className="setGender_box_option">
                    <Link to='/edit' onClick={() => changeGenderHandler(1)}>男</Link>
                    <Link to='/edit' onClick={() => changeGenderHandler(0)}>女</Link>
                </div>
                <Link to='/edit' className='setGender_box_cancel'>×</Link>
            </div>
        </div>
    )
}
