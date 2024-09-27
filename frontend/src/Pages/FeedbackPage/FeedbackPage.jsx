import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Container, IconButton } from '@mui/material';

import { Link } from 'react-router-dom';
import { Header } from '../../Components';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export const FeedbackPage = () => {
    const [feedback, setFeedback] = useState('');
    const [helpdesk, setHelpdesk] = useState('');
    const [isFeedbackSubmitted, setIsFeedbackSubmitted] = useState(false);
    const [isHelpdeskSubmitted, setIsHelpdeskSubmitted] = useState(false);

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleHelpdeskChange = (event) => {
        setHelpdesk(event.target.value);
    };

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();
        setIsFeedbackSubmitted(true);
    };

    const handleHelpdeskSubmit = (event) => {
        event.preventDefault();
        setIsHelpdeskSubmitted(true);
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
                        Feedback
                    </Typography>
                </Box>

                <Paper elevation={3} sx={{ p: 3 }}>
                    {/* Feedback Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Feedback
                        </Typography>
                        {isFeedbackSubmitted ? (
                            <Typography sx={{ color: 'green' }}>
                                Thank you for your feedback!
                            </Typography>
                        ) : (
                            <form onSubmit={handleFeedbackSubmit}>
                                <TextField
                                    label="Type your feedback here..."
                                    multiline
                                    rows={4}
                                    fullWidth
                                    value={feedback}
                                    onChange={handleFeedbackChange}
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <Button type="submit" variant="contained" color="primary">
                                    Submit Feedback
                                </Button>
                            </form>
                        )}
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};
