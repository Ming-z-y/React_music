import React, { useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import context from '../../context/Context'
import { Base_URL, Cookie } from '../../common/constants/UserData'
import './index.css'

export default function EditInfo() {
    const ctx = React.useContext(context)
    const uploadFileRef = useRef()
    const changeAvatar_img = async (file) => {
        let formData = new FormData
        formData.append('imgFile', file)
        const imgSize = await getImgSize(file)
        const res = await fetch(`${Base_URL}/avatar/upload?imgSize=${imgSize.width}&imgX=0&imgY=0&cookie=${Cookie}`, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formData
        })
        const data = await res.json()
        console.log(data);
        // console.log(formData.get('imgFile'));
    }

    function getImgSize(file) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = function (theFile) {
                let image = new Image()
                image.src = theFile.target.result
                image.onload = function () {
                    resolve({
                        width: this.width,
                        height: this.height,
                    })
                }
            }
        })
    }

    if (uploadFileRef.current) {
        uploadFileRef.current.addEventListener('change', function (e) {
            changeAvatar_img(this.files[0])
            console.log(this.files[0]);
        })
    }
    return (
        <div className='editInfoBox'>
            <Outlet />
            <div className="editTop">
                <Link to='/home/firstPage'><i className='iconfont backicon'>&#xeb09;</i></Link>
                <h2 >我的资料</h2>
            </div>
            <div className="editBox_basicInfo">
                <div className='upload_img_box'>
                    <div>头像</div>
                    <input type="file" ref={uploadFileRef} className='upFileIpt' />
                    <img src={ctx.avatarUrl} alt="avatar" style={{ width: 30 + 'px', borderRadius: 50 + '%', height: 30 + 'px' }} />
                </div>
                <Link to='setNickName'>
                    <div>昵称</div>
                    <div>{ctx.nickname}</div>
                </Link>
                <Link to='gender'>
                    <div>性别</div>
                    <div>{ctx.gender === 1 ? '男' : '女'}</div>
                </Link>
                <Link to='QRcode'>
                    <div>二维码</div>
                    <div className='iconfont'>&#xe600;</div>
                </Link>
            </div>
            <div className="editBox_basicInfo">
                <Link to='birthday'>
                    <div>生日</div>
                    <div>未设置</div>
                </Link>
                <Link to='region'>
                    <div>地区</div>
                    <div>河南省濮阳市</div>
                </Link>
                <Link to='university'>
                    <div>大学</div>
                    <div>未填写</div>
                </Link>
                <Link to='musicLabel'>
                    <div>音乐标签</div>
                    <div>选择标签</div>
                </Link>
                <Link to='briefIntro'>
                    <div>简介</div>
                    <div>还没有简介</div>
                </Link>
            </div>
            <div className="editBox_basicInfo">
                <Link to='privacySetting'>个人主页隐私设置</Link>
                <Link to='orderSetting'>主页模块顺序设置</Link>
            </div>
            <div className="editBox_basicInfo">
                <Link to='accountSetting' style={{ height: 25 + 'vw' }}>账号和绑定设置</Link>
            </div>
        </div>
    )
}
