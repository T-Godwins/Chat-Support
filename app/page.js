"use client"
import { Box, Stack, TextField, Button} from "@mui/material"
import { useState } from "react";
import Markdown from 'react-markdown'
import Messages from './components/Messages'

export default function Home() {
  const [messages, setMessages] = useState([
    {role: 'assistant', content: "Hi I'm a virtual dietition. How may I help you?"},
  ])

  const sendMessage = async () => {
    setMessage('')
    setMessages((messages) => [...messages, {role: 'user', content: message}, {role: 'assistant', content: ''}])
    const response = fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([...messages, {role: 'user', content: message}]),
    }) .then(async (res) => {
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let result = ''
      return reader.read().then(function processText({done, value}){
        if (done) {
          return result
        }
        const text = decoder.decode(value || new Uint8Array(), {stream: true})
        setMessages((messages) => {
          let lastMessage = messages[messages.length - 1]
          let otherMessages = messages.slice(0, messages.length - 1)

          return [
            ...otherMessages, 
            {...lastMessage, content: lastMessage.content + text}]
        })
        return reader.read().then(processText)
      })
    })
  }

  const [message, setMessage] = useState('')
    return (
    <Box
      width ="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="white"
    >
      <Stack
        direction={"column"} 
        width={{xs: "90%", md:"70%", lg:"50%"}} 
        height={{xs: "70%", md:"70%", lg:"70%"}} 
        // border="2px solid grey" 
        borderRadius={5}
        bgcolor="white"
        sx={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}
        p={2}        
        >
        <Stack 
          directions={"column"} 
          spacing={0} 
          flexGrow={1}
          overflow="auto"
          >
          {
            messages.map((message, index) => (
              <Box color="white"
                key={index}
                display="flex"
                justifyContent={message.role === 'assistant' ? 'flex-start': 'flex-end'}
              >
                <Messages role={message.role} content={message.content} />
              </Box>
            ))
          }
        </Stack>
        <Stack direction={'row'} spacing={2} p={1}>
          <TextField 
          variant="outlined"
          label="Message" 
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          />
          <Button variant="contained" color="inherit" onClick={sendMessage}>
            Send
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
