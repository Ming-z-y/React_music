import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import context from '../../context/Context'
import SideBarCard from './components/SideBarCard'
import SideBarInner from './components/SideBarInner'
import history from '../Login/history'
import './index.css'
import AvatarUrl from '../../common/components/AvatarUrl'

export default function SideBar(props) {
    const logOutFun = () => {
        if (window.confirm('确认退出登录吗?')) {
            localStorage.removeItem('cookie')
            history.push('/')
            window.location.reload()
        }
    }
    const ctx = useContext(context)
    return (
        <div className='SideBarPage' style={props}>
            <div className="SideBarPage_top">
                <Link to='/home' style={{ fontSize: 15 + 'px', display: 'flex', alignItems: 'center' }}><AvatarUrl width='25' right='5' /> {ctx.nickname}&gt;</Link>
                <div style={{ fontSize: 20 + 'px' }} className='iconfont'>&#xe600;</div>
            </div>
            <div className="SideBarPage_card">
                <p>开通黑胶VIP</p>
            </div>
            <SideBarCard>
                <SideBarInner><i className='iconfont'>&#xe6d3;</i> 我的消息</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe618;</i> 云贝中心</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe622;</i> 创作者中心</SideBarInner>
            </SideBarCard>
            <SideBarCard>
                <SideBarInner><i className='iconfont'>&#xe63e;</i> 云村有票</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe618;</i> 商城</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe8c7;</i> Beat交易平台</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe6d3;</i> 游戏专区</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe890;</i> 口袋彩铃</SideBarInner>
            </SideBarCard>
            <SideBarCard>
                <SideBarInner><i className='iconfont'>&#xe63e;</i> 设置</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe618;</i> 深色模式</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe8c7;</i> 定时关闭</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe6d3;</i> 个性装扮</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe890;</i> 边听边存</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe618;</i> 在线听歌免流量</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe8c7;</i> 音乐黑名单</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe6d3;</i> 青少年模式</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe890;</i> 音乐闹钟</SideBarInner>
            </SideBarCard>
            <SideBarCard>
                <SideBarInner><i className='iconfont'>&#xe63e;</i> 我的订单</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe618;</i> 优惠券</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe8c7;</i> 我的客服</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe6d3;</i> 分享网易云音乐</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe63e;</i> 个人信息手机与使用清单</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe618;</i> 个人信息与第三方共享清单</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe8c7;</i> 个人信息与隐私保护</SideBarInner>
                <SideBarInner><i className='iconfont'>&#xe6d3;</i> 关于</SideBarInner>
            </SideBarCard>
            <SideBarCard>
                <div className='logOut' onClick={logOutFun}>退出登录/关闭</div>
            </SideBarCard>
        </div>
    )
}
