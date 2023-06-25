// eslint-disable-next-line
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'
import './App.css'

const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

function App() {
  const [messages, setMessages] = useState([])

  const handleMessageSend = messageContent => {
    const randomUser = userList[Math.floor(Math.random() * userList.length)]
    const newMessage = {
      id: uuidv4(),
      content: messageContent,
      username: randomUser,
      likes: 0,
      mentionedUsers: [],
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
    <div className="chat-app">
      <h1>Chat Application</h1>
      <div className="chat-messages">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            content={message.content}
            username={message.username}
            likes={message.likes}
            mentionedUsers={message.mentionedUsers}
            onLikeClick={() => handleLikeClick(message.id)}
          />
        ))}
      </div>
      <ChatInput onMessageSend={handleMessageSend} />
    </div>
  )
}

export default App
