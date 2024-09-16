import React from 'react';

import { Box, ListItem, ListItemText, Typography, List, Link } from '@mui/material';
import navItems from './data/navigationItems.json'

export default function NavBar() {
    
    return(
        <Box name="navigation" sx={{height:'60px', bgcolor: 'primary.main', position: 'sticky', display:'flex'}}> 
            <Box name="name" sx={{ display:'flex', width:'70%'}}>
                <Typography variant="h5" color="primary.text" sx={{p:2,paddingLeft: '100px', fontFamily:'RegardsRegular' }}>
                    Khanh Chi Le
                </Typography>
            </Box>
            <Box name="menu" sx={{justifyContent:'center', display:'flex', width:'30%',}}>
                <List sx={{display: 'flex', flexDirection: 'row'}}>
                    {navItems.map(item => (
                        <ListItem key={item.id} sx={{padding: 0, margin: '0 8px'}}>
                                <ListItemText 
                                disableTypography
                                primary={
                                <Typography 
                                variant="subtitle1" 
                                sx={{ color: "primary.text" }}
                                >
                                    <Link href={item.route} color="inherit" underline="none">
                                        {item.name}
                                    </Link>
                                </Typography>
                            }
                                />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    )
}