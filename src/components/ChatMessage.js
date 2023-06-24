// eslint-disable-next-line
import React from 'react'
import './ChatMessage.css'

function ChatMessage({content, username, likes, onLikeClick}) {
  return (
    <div className="chat-message">
      <p className="message-content">{content}</p>
      <p>Username: {username}</p>
      <p>Likes: {likes}</p>
      <button type="button" onClick={onLikeClick} className="button">
        Like
      </button>
    </div>
  )
}

export default ChatMessage
