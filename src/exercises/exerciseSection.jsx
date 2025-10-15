//add boundry 

import React from 'react';
import ErrorBoundary from './errorBoundary';

export default function ExerciseSection({ title, Directions, StudentWork }) {
    return (
        <ErrorBoundary>
        <div>
            <h2 style={{ textAlign: 'center' }}>{title}</h2>
            <div style={{ display: 'flex' }}>
                <section style={{ flex: 1 }}>
                    <Directions />
                </section>
                <section style={{ flex: 1 }}>
                    <StudentWork />
                </section>
            </div>
        </div>
        </ErrorBoundary>
    );
}
