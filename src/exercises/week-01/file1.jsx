//students work lives in this file 
//test i run will target this file 
import React from 'react';

//if name passes in the prop it will render the name else it will render world

export default function StudentWork({ name }) {
    return (
        <h1>Hello, {name || 'World'}!</h1>
    );
}
