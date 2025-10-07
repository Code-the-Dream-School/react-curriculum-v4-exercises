// //will hold error boundary for lessons in the future
// //will hold weeks files and directions 

// import React from 'react';
// import { ErrorBoundary } from 'react-error-boundary';
// import Directions from '../../exercises/week-11/directions';
// //import files here


// //fallback function for error boundary
// function Fallback({error, resetErrorBoundary}){
//     //will call reseterrorboundary to reset the error boundary and try and render again
//     return (
//         <div role="alert">
//             <p> Something went ABSOLUTLEY wrong: </p>
//             <pre style={{color:"red"}}>{error.message}</pre>
//         </div>
//     )
// }


import React from 'react';
import Directions from '../../exercises/week-11/directions';
//import files here


export default function Week11() {
    return (
        <div>
            <Directions />
        </div>

    );
}