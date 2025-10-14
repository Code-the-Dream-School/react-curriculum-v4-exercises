//this file will hold the header component for all pages

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1> CTD React Exercises </h1>
            <Link to="/"> Home </Link>
        </header>
    );
};

