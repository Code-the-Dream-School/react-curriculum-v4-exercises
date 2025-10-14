//test for week 1 exercises
//test will target file1.jsx where students will write their code 
//test will check if the component renders without crashing 
//test will check if the component renders the correct text based on the name prop 

import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentWork from '../exercises/week-01/file1';
import {describe, it, expect} from 'vitest';
import '@testing-library/jest-dom/vitest';

//will describe what we are testing 
describle('StudentWork', () =>{
    ///callback function with different test cases
    it('renders default text', () => {
        render(< StudentWork />)
        expect(screen.getByText('Hello, World')).toBeInTheDocument();
    })
    // it('renders name when passed as prop')


})

