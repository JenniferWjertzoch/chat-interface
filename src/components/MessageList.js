import React from 'react'
import MessageReceived from './MessageReceived';

export default function MessageList({ allMessages }) {
    return (
        <div className="cards">
            {allMessages.map(message => <MessageReceived message={message} />)}
        </div>
    )
}
