import React from 'react';

import { Box, List, ListItem, Typography} from '@mui/material';

import experienceList from './data/experience.json';

export default function Experience() {
    const dataCard = (list) => {
        return(
            <Box>
                <List>
                    {list.map(item => (
                        <ListItem>
                            <Box sx={{display:'flex', p:2}}>
                                <Box sx={{width:'50%'}}>
                                    <Typography variant="subtitle1">
                                        {item.date}
                                    </Typography>
                                </Box>
                                <Box sx={{width:'50%'}}>
                                    <Typography variant="h5" sx={{fontFamily:"RegardsRegular"}}>
                                        {item.company}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.title}
                                    </Typography>

                                </Box>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        )
    };
    return (
        <Box>
            <Box sx={{display:"flex", p:2}}>
                <Box sx={{width:'50%', p:3}}>
                    <Typography variant="h1" sx={{fontFamily: 'RegardsRegular', color: 'forth.text'}}>
                        Experience.
                    </Typography>
                    <Typography variant="h5" sx={{fontFamily: 'Quasimoda'}}>
                        
                    </Typography>
                </Box>
                <Box sx={{width:'50%', p:3}}>
                    {dataCard(experienceList)};
                </Box>

            
            </Box>
        </Box>
    )
}