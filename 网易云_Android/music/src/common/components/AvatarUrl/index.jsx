import React, { useContext, useRef } from 'react'
import context from '../../../context/Context'

export default function AvatarUrl(props) {
    const ctx = useContext(context)
    return (
        <img src={ctx.avatarUrl} alt="avatar" style={{ width: props.width + 'px', borderRadius: 50 + '%', marginRight: props.right + 'px', height: props.height + 'px' }} />
    )
}
