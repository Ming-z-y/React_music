import React, { useRef, useState, useContext } from 'react'
import context from '../../../context/Context'
import { Base_URL, Id } from '../../../common/constants/UserData'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import './index.css'

export default function SetNickName() {
    const [nickState, setNickState] = useState({
        isDuplicated: false,
        candidateNicknames: [],
        isUsed: true
    })
    const ctx = useContext(context)
    const checkIsRepetition = async (value) => {
        const res = await fetch(`${Base_URL}/nickname/check?nickname=${value}`)
        const data = await res.json()
        console.log(data);
        const { candidateNicknames, duplicated, code } = data
        if (code === 400) {
            setNickState(e => ({ ...e, isUsed: false, isDuplicated: false, candidateNicknames: [] }))
        } else if (duplicated === true) {
            setNickState({ isDuplicated: duplicated, isUsed: true, candidateNicknames })
        } else if (duplicated === false) {
            setNickState({ isDuplicated: duplicated, isUsed: true, candidateNicknames: [] })
            changeNickName(inputRef.current.value)
        }
    }
    const changeNickName = async (nickname) => {
        const res = await fetch(`${Base_URL}/user/update?gender=${ctx.gender}&signature=${ctx.signature}&city=${ctx.city}&nickname=${nickname}&birthday=${ctx.birthday}&province=${ctx.province}`)
        const data = await res.json()
        console.log(data);
        alert('修改名字成功')
    }
    const changeCommandNickName = (e) => {
        inputRef.current.value = e.target.innerText
    }
    const inputRef = useRef()
    const saveHandle = () => {
        const { current: { value } } = inputRef
        if (value) {
            if (window.confirm('确定修改名称吗?')) {
                checkIsRepetition(value)
            }
        } else {
            alert('不能为空')
        }
    }
    return (
        <div className='setNick_name'>
            <div className="setNick_name_top">
                <div>
                    <Link to='/edit'><i className='iconfont'>&#xeb09;</i></Link><i>修改昵称</i>
                </div>
                <div onClick={saveHandle}>保存</div>
            </div>
            <div className='input_box'>
                <input type="text" placeholder='设置新名字' ref={inputRef} />
            </div>
            <div className='infoMsg_box'>
                {
                    (!nickState.isUsed) ? '该名称不规范' :
                        (!nickState.isDuplicated) ? '' :
                            '该名称重复，试试下列的名称：'
                }
            </div>
            <div className="commandNickname_box">
                {
                    (!nickState.isDuplicated) ? '' :
                        nickState.candidateNicknames.map(element => {
                            return <div key={nanoid()} className='commandNickname_box_inner' onClick={changeCommandNickName}>{element}</div>
                        })
                }
            </div>
        </div>
    )
}
