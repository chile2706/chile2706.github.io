import React from 'react';

import { Box, Typography} from '@mui/material';

export default function Home() {
    return (
        <Box sx={{display:"flex", p:2}}>
            <Box sx={{width:'60%', p:3}}>
                <Typography variant="h1" sx={{fontFamily: 'RegardsRegular', color: 'secondary.text'}}>
                    Hello, I am Chi.
                </Typography>
                <Typography variant="h6" sx={{fontFamily: 'Quasimoda', paddingBottom: '150px'}}>
                    A passionate Data Engineer and NLP researcher
                </Typography>
                <Typography variant="h4"sx={{fontFamily: 'RegardsRegular'}} >
                    University of Minnesota, Twin Cities
                </Typography>
                <Typography variant="body1">
                    Junior, Data Science & Statistics
                </Typography>

            </Box>
            <Box sx={{width:'40%', p:4, display:'flex', justifyContent:'center', alignContent: 'center'}}>
                <img 
                src="/images/home.jpg" 
                alt="Chi Le" 
                style={{ 
                    width: '100%', 
                    height: 'auto',
                    borderRadius: '50%', 
                }} />
            </Box>
        </Box>
    )
};