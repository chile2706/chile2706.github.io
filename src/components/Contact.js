import React, {useState, useRef} from 'react';

import { Box, List, ListItem, ListItemIcon, Typography, ListItemText, Link, TextField, Button} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        .sendForm('service_7llezb8', 'contact_form', form.current, {
            publicKey: 'bdst_Y8i2fI3uRMb9',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            setLoading(false);
            },
            (error) => {
            console.log('FAILED...', error.text);
            setLoading(false);
            },
        );

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const infor = () => {
        return(
            <Box>
                <img 
                    src="/images/contact.jpg" 
                    alt="Chi Le" 
                    style={{ 
                        width: '50%', 
                        height: 'auto',
                        borderRadius: '50%', 
                    }} />
                    <Box>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LinkedInIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography>
                                            <Link
                                            href="https://www.linkedin.com/in/khanh-chi-le/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            color="inherit"
                                            >
                                            LinkedIn
                                            </Link>
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <GitHubIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography>
                                            <Link
                                            href="https://github.com/chile2706" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            color="inherit"
                                            >
                                            Github
                                            </Link>
                                        </Typography>
                                    }
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography>
                                            <Link
                                            href="mailto:lekhanhchi2706@gmail.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            color="inherit"
                                            >
                                            Email
                                            </Link>
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
            </Box>
        
        );
    };

    const contact = () => {
        return(
            <Box sx={{bgcolor:"fifth.text", width: '90%', height: '100%', borderRadius:'50px'}}>
                <Box sx={{p:3}}>
                <Typography variant="h5" gutterBottom>
                Get in touch
            </Typography>
            <form ref={form} onSubmit={handleSubmit}>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        sx={{bgcolor: "fifth.main"}}
                        required
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{bgcolor: "fifth.main"}}
                        required
                    />
                </Box>
                <Box sx={{ mb: 2 }}>
                    <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        sx={{bgcolor: "fifth.main"}}
                        required
                    />
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send'}
                </Button>
            </form>
            </Box>
            </Box>
        )
    }

    return (
        <Box>
            <Box sx={{p:3}}>
                <Typography variant="h1" sx={{fontFamily: 'RegardsRegular', color: 'fifth.text'}}>
                    Contact.
                </Typography>
            </Box>
            <Box sx={{display:'flex', p:0}}>
                <Box sx={{width:'40%', paddingLeft:3}}>
                    {infor()}
                </Box>
                <Box sx={{width:'60%'}}>
                      {contact()}
                </Box>
            </Box>
            
        </Box>
    )
}