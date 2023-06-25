// eslint-disable-next-line
import React from 'react'
import './ChatMessage.css'

const ChatMessage = ({content, username, likes, onLikeClick}) => (
  <div className="chat-message">
    <div className="message-header">
      <span className="username">{username}</span>
    </div>
    <div className="message-content">{content}</div>
    <div className="message-actions">
      <button type="button" className="like-button" onClick={onLikeClick}>
        Like ({likes})
      </button>
    </div>
  </div>
)

export default ChatMessage
