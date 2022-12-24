import { Box, Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <Box>
            <Container>
                <Header/>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default Main;