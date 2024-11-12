import React from 'react';
import { Outlet } from 'react-router-dom';
import { FooterBar, NavigationBar } from '../components';

const StoreLayout = (): JSX.Element => {
    return(
        <>
            <NavigationBar />
            <Outlet />
            <FooterBar />
        </>
    );
}

export default StoreLayout;