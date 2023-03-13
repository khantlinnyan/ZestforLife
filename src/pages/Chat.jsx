import React from 'react'
import ChatBox from '../components/ChatBox'
import SendMessage from '../components/SendMessage'

const Chat = () => {
  return (
    <div className='mt-2 mx-4 md:mx-6 lg:mx-7'>
      <ChatBox/>
      <br/>
      <br/>
      <SendMessage/>
    </div>
  )
}

export default Chat
