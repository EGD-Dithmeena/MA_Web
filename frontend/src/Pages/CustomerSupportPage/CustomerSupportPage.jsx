import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Header } from '../../Components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const CustomerSupportPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [agentAssigned, setAgentAssigned] = useState(false);

  const defaultQuestions = [
    "How can I contact support?",
    "Tell me more about your services.",
    "Where can I view my current and past bills on the Sri-Care platform?",
    "How can I make online payments for my telecommunications services?",
    "How can I view my payment history?",
    "What payment methods are accepted for online bill payments?",
    "How do I set up email notifications for my account?",
    "What are the customer care agents' working hours for live chat support?"
  ];

  useEffect(() => {
    // Fetch previous messages or initialize chat with agent
    axios.get('/api/customer-support/chat-history')
      .then(response => setMessages(response.data))
      .catch(error => console.error('Error fetching chat history:', error));
  }, []);

  const handleSendMessage = () => {
    const message = {
      content: newMessage,
      sender: 'customer',
      timestamp: new Date().toISOString()
    };

    // Send message to backend
    axios.post('/api/customer-support/send-message', message)
      .then(response => {
        setMessages([...messages, response.data]);
        setNewMessage('');
      })
      .catch(error => console.error('Error sending message:', error));
  };

  const handleQuestionClick = (question, id) => {
    // Add the user's question to the messages
    setMessages(prevMessages => [...prevMessages, { content: question, sender: 'customer', timestamp: new Date().toISOString() }]);
    sendQuestionToBackend(id);
  };

  const sendQuestionToBackend = (id) => {
    axios.get(`http://localhost:8222/api/chat/messages/${id}`)
      .then(response => {
        const backendResponse = response.data;
        // Add the backend response to messages
        setMessages(prevMessages => [...prevMessages, { content: backendResponse, sender: 'agent', timestamp: new Date().toISOString() }]);
      })
      .catch(error => console.error('Error fetching response from backend:', error));
  };

  const handleEndChat = () => {
    // End chat logic
    axios.post('/api/customer-support/end-chat')
      .then(() => {
        alert('Chat ended');
        setMessages([]);
      })
      .catch(error => console.error('Error ending chat:', error));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Header />

      <Container sx={{ mt: 4 }}>
        {/* Heading */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          {/* Back Arrow Button */}
          <Link to={"/userDashboard/home"} style={{ textDecoration: "none" }}>
            <IconButton>
              <ArrowBackIosNewIcon style={{color:'black'}} />
            </IconButton>
          </Link>

          {/* Heading */}
          <Typography variant="h4" sx={{ ml: 2 }}>
            Customer Support
          </Typography>
        </Box>
        
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">Live Chat</Typography>

          <Box sx={{ maxHeight: '300px', overflowY: 'auto', mb: 2 }}>
            <List>
              {messages.map((message, index) => (
                <ListItem key={index} sx={{ justifyContent: message.sender === 'customer' ? 'flex-end' : 'flex-start' }}>
                  <ListItemText
                    primary={message.content}
                    secondary={new Date(message.timestamp).toLocaleTimeString()}
                    sx={{ backgroundColor: message.sender === 'customer' ? '#e0f7fa' : '#fff3e0', borderRadius: '8px', p: 1 }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Message Input */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
              <SendIcon />
            </IconButton>
          </Box>

          {/* End Chat Button */}
          {agentAssigned && (
            <Button onClick={handleEndChat} color="error" variant="contained" sx={{ mt: 2 }}>
              End Chat
            </Button>
          )}
        </Paper>

        {/* Default Questions Section */}
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h6">Frequently Asked Questions</Typography>
          <Box sx={{ mt: 2 }}>
            {defaultQuestions.map((question, index) => (
              <Button
                key={index}
                onClick={() => handleQuestionClick(question, index + 1)}
                variant="outlined"
                sx={{ m: 1 }}
              >
                {question}
              </Button>
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
