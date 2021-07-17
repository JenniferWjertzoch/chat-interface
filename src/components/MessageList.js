import React from 'react'
import MessageReceived from './MessageReceived';
import MessageSent from './MessageSent';

export default function MessageList({ allMessages }) {
    return (
        <div className="cards">
            {allMessages.map(message => {
                if (message.author === "Tom") {
                    return <MessageSent message={message} />
                } else {
                    return <MessageReceived message={message} />
                }
            })}
        </div>
    )
}
