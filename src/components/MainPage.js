// import React, { useRef, useState, useEffect } from 'react';
import React from 'react';

import { Box, } from '@mui/material';

import NavBar from './NavBar';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';
import About from './About';

export default function MainPage() {

    return (
        <Box sx={{justifyContent:'center', display:'flex', bgcolor: '#E4D4C0'}}>
            <Box name="container" sx={{ width:'97%', paddingTop: '1.5%'  }}>
                <NavBar/>
                <Box marginInlineEnd="home" sx={{height: '90vh', bgcolor: 'secondary.main'}}>
                    <Home/>
                </Box>
                <Box id="about" sx={{height: '90vh', bgcolor: 'third.main'}}>
                    <About/>
                </Box>
                <Box id="experience" sx={{height: '90vh', bgcolor: 'forth.main'}}>
                    <Experience/>
                </Box>
                <Box id="contact" sx={{height: '90vh', bgcolor: 'fifth.main'}}>
                    <Contact/>
                </Box>
            </Box>
        </Box>

    )
};