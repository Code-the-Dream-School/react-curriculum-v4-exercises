// TOPIC: Performance Measurement Hook
// This component provides render counting functionality to visualize re-renders

import { useRef } from 'react';

// Custom hook to track render counts
export function useRenderCounter(componentName) {
  // NOTE: We use useRef instead of useState here because:
  // - useState would trigger re-renders when the count changes, creating infinite loops
  // - We want to track renders WITHOUT causing additional renders
  // - The counter should be a passive observer, not participate in the render cycle
  const renderCount = useRef(0);

  // eslint-disable-next-line react-hooks/refs
  renderCount.current += 1;

  return {
    // eslint-disable-next-line react-hooks/refs
    count: renderCount.current,
    componentName,
  };
}

// Component to display render count badge
export function RenderCounter({ componentName }) {
  const { count } = useRenderCounter(componentName);

  return (
    <div
      style={{
        position: 'absolute',
        top: '5px',
        right: '5px',
        backgroundColor: '#ff6b35',
        color: 'white',
        padding: '2px 6px',
        borderRadius: '10px',
        fontSize: '12px',
        fontWeight: 'bold',
        zIndex: 1000,
      }}
    >
      {componentName}: {count}
    </div>
  );
}

// Wrapper component that adds render tracking to any component
export function WithRenderCounter({ componentName, children, style = {} }) {
  return (
    <div style={{ position: 'relative', ...style }}>
      <RenderCounter componentName={componentName} />
      {children}
    </div>
  );
}
