import React from 'react'
import {v4 as uuidv4} from 'uuid'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

function App() {
  const [messages, setMessages] = React.useState([])

  const handleMessageSend = messageContent => {
    const randomUser = userList[Math.floor(Math.random() * userList.length)]
    const newMessage = {
      id: uuidv4(),
      content: messageContent,
      username: randomUser,
      likes: 0,
    }
    setMessages([...messages, newMessage])
  }

  const handleLikeClick = id => {
    const updatedMessages = messages.map(message => {
      if (message.id === id) {
        return {
          ...message,
          likes: message.likes + 1,
        }
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (
    <div>
      <h1>Chat Application</h1>
      <ChatInput onMessageSend={handleMessageSend} />
      <div>
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            content={message.content}
            username={message.username}
            likes={message.likes}
            onLikeClick={() => handleLikeClick(message.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
