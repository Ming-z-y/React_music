import React from 'react'
import './index.css'
import { NavLink, Outlet } from 'react-router-dom'
import Cover from './components/Cover'
import User from './components/User'


export default function Home() {

    return (
        <div className='HomePage'>
            <Cover />
            <User>
                <div className="nav">
                    <NavLink to='firstPage'>首页</NavLink>
                    <NavLink to='dynamicState'>动态</NavLink>
                    <a>播客</a>
                </div>
                <Outlet />
            </User>
        </div>
    )
}

