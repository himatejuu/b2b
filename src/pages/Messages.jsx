import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Messages.css'

const MOCK_CONVERSATIONS = [
  { id: '1', name: 'Industrial Equipment Co.', lastMessage: 'Is the machine still available?', time: '2h ago', unread: true },
  { id: '2', name: 'Tech Solutions Ltd.', lastMessage: 'Thank you for the information', time: '1d ago', unread: false },
  { id: '3', name: 'Mumbai Machinery', lastMessage: 'Can we schedule a viewing?', time: '2d ago', unread: false }
]

const MOCK_MESSAGES = [
  { id: '1', sender: 'them', text: 'Hi, I\'m interested in your CNC milling machine', time: '10:30 AM' },
  { id: '2', sender: 'me', text: 'Hello! Yes, it\'s still available. What would you like to know?', time: '10:45 AM' },
  { id: '3', sender: 'them', text: 'Is the machine still available?', time: '11:00 AM' }
]

function Messages() {
  const { id } = useParams()
  const [activeConvo, setActiveConvo] = useState(id || MOCK_CONVERSATIONS[0].id)
  const [message, setMessage] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!message.trim()) return
    console.log('Sending:', message)
    setMessage('')
  }

  return (
    <div className="messages">
      <div className="messages__sidebar">
        <h2 className="messages__sidebar-title">Messages</h2>
        <div className="messages__conversations">
          {MOCK_CONVERSATIONS.map(convo => (
            <button
              key={convo.id}
              className={`conversation ${activeConvo === convo.id ? 'conversation--active' : ''}`}
              onClick={() => setActiveConvo(convo.id)}
            >
              <div className="conversation__avatar">
                {convo.name.charAt(0)}
              </div>
              <div className="conversation__content">
                <div className="conversation__header">
                  <span className="conversation__name">{convo.name}</span>
                  <span className="conversation__time">{convo.time}</span>
                </div>
                <p className="conversation__preview">
                  {convo.lastMessage}
                </p>
              </div>
              {convo.unread && <span className="conversation__badge" />}
            </button>
          ))}
        </div>
      </div>

      <div className="messages__main">
        <div className="messages__header">
          <h3 className="messages__header-title">
            {MOCK_CONVERSATIONS.find(c => c.id === activeConvo)?.name}
          </h3>
        </div>

        <div className="messages__thread">
          {MOCK_MESSAGES.map(msg => (
            <div
              key={msg.id}
              className={`message ${msg.sender === 'me' ? 'message--sent' : 'message--received'}`}
            >
              <div className="message__bubble">
                <p className="message__text">{msg.text}</p>
                <span className="message__time">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="messages__composer">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="messages__input"
          />
          <button type="submit" className="messages__send">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Messages
