import React from 'react'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={'message-item'}>
            <div className={'message-item__avatar'}>
                <img className={'message-item__img'} src={props.avatar} alt=""/>
            </div>
            <div className={'message-item__message message'}>
                <div className={'message__name'}>{props.name}</div>
                <div className={'message__text'}>{props.message}</div>
                <div className={'message__date'}>{props.time}</div>
                <div className="corner"></div>
                <div className="corner2"></div>
            </div>
        </div>
    )
}

export default Message
