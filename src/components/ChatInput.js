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
  {emoji: '😃', name: 'Grinning Face with Big Eyes'},
  {emoji: '😄', name: 'Grinning Face with Smiling Eyes'},
  {emoji: '😁', name: 'Beaming Face with Smiling Eyes'},
  {emoji: '😆', name: 'Grinning Squinting Face'},
  {emoji: '😅', name: 'Grinning Face with Sweat'},
  {emoji: '🤣', name: 'Rolling on the Floor Laughing'},
  {emoji: '😂', name: 'Face with Tears of Joy'},
  {emoji: '🙂', name: 'Slightly Smiling Face'},
  {emoji: '🙃', name: 'Upside-Down Face'},
  {emoji: '😉', name: 'Winking Face'},
  {emoji: '🤗', name: 'Hugging Face'},
  {emoji: '😘', name: 'Face Blowing a Kiss'},
  {emoji: '🤩', name: 'Star-Struck'},
  {emoji: '🤪', name: 'Zany Face'},
  {emoji: '😜', name: 'Winking Face with Tongue'},
  {emoji: '🤓', name: 'Nerd Face'},
  {emoji: '😇', name: 'Smiling Face with Halo'},
  {emoji: '🥰', name: 'Smiling Face with Hearts'},
  {emoji: '🤫', name: 'Shushing Face'},
  {emoji: '🥺', name: 'Pleading Face'},
  {emoji: '😴', name: 'Sleeping Face'},
  {emoji: '🤔', name: 'Thinking Face'},
  {emoji: '😑', name: 'Expressionless Face'},
  {emoji: '🤗', name: 'Hugging Face'},
  {emoji: '🤭', name: 'Face with Hand Over Mouth'},
  {emoji: '🙄', name: 'Face with Rolling Eyes'},
  {emoji: '😏', name: 'Smirking Face'},
  {emoji: '😤', name: 'Face with Steam From Nose'},
  {emoji: '😷', name: 'Face with Medical Mask'},
]
const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

function ChatInput({onMessageSend}) {
  const [message, setMessage] = useState('')
  const [showEmojis, setShowEmojis] = useState(false)
  const [showUserList, setShowUserList] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleMessageChange = event => {
    setMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onMessageSend(message)
      setMessage('')
    }
  }

  const toggleShowEmojis = () => {
    setShowEmojis(prev => !prev)
  }

  const toggleShowUserList = () => {
    setShowUserList(prev => !prev)
  }

  const handleUserClick = user => {
    setMessage(prev => `${prev}@${user} `)
    setShowUserList(false)
  }

  const handleEmojiClick = emoji => {
    setMessage(prev => prev + emoji)
  }

  const filterEmojis = () => {
    if (searchQuery === '') {
      return emojis
    }
    const query = searchQuery.toLowerCase()
    return emojis.filter(emoji => emoji.name.toLowerCase().includes(query))
  }

  const handleSearchChange = event => {
    setSearchQuery(event.target.value)
  }

  const handleKeyPress = event => {
    if (event.key === '@') {
      toggleShowUserList()
    }
  }

  const filterUserList = () => {
    const mentionKeyword = message.split('@').pop().toLowerCase().trim()
    return userList.filter(user =>
      user.toLowerCase().startsWith(mentionKeyword),
    )
  }

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        onKeyPress={handleKeyPress}
      />
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
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search emojis..."
            />
            {filterEmojis().map(emoji => (
              <button
                key={emoji.emoji}
                type="button"
                className="emoji-item"
                onClick={() => handleEmojiClick(emoji.emoji)}
                title={emoji.name}
              >
                {emoji.emoji}
              </button>
            ))}
          </div>
        )}
      </div>

      {showUserList && (
        <div className="mention-dropdown">
          {filterUserList().map(user => (
            <button
              key={user}
              type="button"
              className="mention-item"
              onClick={() => handleUserClick(user)}
            >
              {user}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ChatInput
