//This file will hold layout for all pages
//import header component
import React from 'react';
import Header from './private/components/header';

export default function Layout({children}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    );
}