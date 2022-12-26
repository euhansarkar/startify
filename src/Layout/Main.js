import { Box, Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <Box>
            <Container>
                <Header/>
                <Outlet></Outlet>
                <Footer/>
            </Container>
        </Box>
    );
};

export default Main;