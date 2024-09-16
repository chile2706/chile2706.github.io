import React from 'react';

import { Box, Typography, Link, List, ListItem, ListItemText} from '@mui/material';

import dataItems1 from './data/about1.json';
import dataItems2 from './data/about2.json'


export default function About() {
    
    const dataCard = (list) => {
        return(
        <Box>
            <List>
                {list.map(item => (
                    <ListItem key={item.title} sx={{paddingBottom:6}}>
                        <ListItemText
                        primary={
                            <Typography variant="h5" sx={{ fontFamily: 'RegardsRegular' }}>
                                <span> 
                                    {item.title}
                                </span>{' '}|{' '}
                                <span style={{fontStyle: 'italic', fontFamily: 'Quasimoda', fontSize: '18px', color: '#3b5562'}}>
                                    {item.side}
                                    <Link 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    color="inherit"
                                    sx={{textUnderlineOffset: '4px', textDecorationThickness: '1px'}}
                                    >
                                        {item.link_text}
                                    </Link>
                                </span>
                            </Typography>
                        }

                        secondary={

                            <Typography variant="body1" sx={{fontSize: "20px"}}>
                                <span style={{fontFamily:'CourierPrime', color:'#3b5562', fontSize:'20px'}}>
                                    {item.technologies}
                                </span>
                                <br/><br/>
                                <span>{item.description}</span>
                            </Typography>
                        }
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    )};

    return (
        <Box>
            <Box sx={{p:3}}>
                <Typography variant="h1" sx={{fontFamily: 'RegardsRegular', color: 'third.text'}}>
                    About Me.
                </Typography>
                <Typography variant="h5" sx={{fontFamily: 'Quasimoda'}}>
                    I am passionate about everything related to Data
                </Typography>
            </Box>
            <Box sx={{display:'flex', p:2}}>
                <Box sx={{width:'50%'}}>
                    {dataCard(dataItems1)};
                </Box>
                <Box sx={{width:'50%'}}>
                    {dataCard(dataItems2)};
                    
                </Box>
            </Box>
        </Box>
    );
};