//this file will be my error boundary component

import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error){
        return {hasError: true}
    }
    componentDidCatch (error, info){
        console.error("Error Boundary CAUGHT!", error, info);
    }
    render() {
        if (this.state.hasError){
            return <h1>Opps something went badly WRONG!</h1>
        }  
        return this.props.children;
        }
}
