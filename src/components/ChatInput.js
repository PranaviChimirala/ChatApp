// eslint-disable-next-line
import React, {useState} from 'react'
import './ChatInput.css'

const emojis = [
  {emoji: '😀', name: 'Grinning Face'},
  {emoji: '👍', name: 'Thumbs Up'},
  {emoji: '❤️', name: 'Red Heart'},
  {emoji: '😊', name: 'Smiling Face with Smiling Eyes'},
  {emoji: '🎉', name: 'Party Popper'},
  {emoji: '🔥', name: 'Fire'},
  {emoji: '😂', name: 'Face with Tears of Joy'},
  {emoji: '😎', name: 'Smiling Face with Sunglasses'},
  {emoji: '🤔', name: 'Thinking Face'},
  {emoji: '😍', name: 'Smiling Face with Heart-Eyes'},
  {emoji: '🙌', name: 'Raising Hands'},
  {emoji: '🥳', name: 'Partying Face'},
]

function ChatInput({onMessageSend}) {
  const [message, setMessage] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)

  const handleMessageChange = event => {
    setMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onMessageSend(message)
      setMessage('')
    }
  }

  const handleEmojiClick = emoji => {
    setMessage(prev => prev + emoji)
    setShowEmojis(false)
  }

  const toggleShowEmojis = () => {
    setShowEmojis(prev => !prev)
  }

  return (
    <div className="chat-input">
      <input type="text" value={message} onChange={handleMessageChange} />
      <button type="button" onClick={handleSendMessage}>
        Send
      </button>
      <div className="emoji-dropdown">
        <button
          type="button"
          className="emoji-toggle"
          onClick={toggleShowEmojis}
        >
          😀
        </button>
        {showEmojis && (
          <div className="emoji-menu">
            {emojis.map(emoji => (
              <button
                key={emoji.emoji}
                type="button"
                className="emoji-item"
                onClick={() => handleEmojiClick(emoji.emoji)}
              >
                {emoji.emoji}
                <span className="emoji-name">{emoji.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatInput
