import { useState, useRef, useEffect } from 'react';

// Custom hook to track and display component render counts
export const useRenderCounter = (componentName) => {
  // useRef is used instead of useState because:
  // 1. We don't want the counter increment to trigger a re-render
  // 2. useRef persists values across renders without causing re-renders
  // 3. If we used useState, incrementing the count would cause infinite re-renders
  const renderCount = useRef(0);
  const [, forceUpdate] = useState({});

  // eslint-disable-next-line react-hooks/refs
  renderCount.current++;

  // Optional: Log renders to console for debugging
  useEffect(() => {
    console.log(`${componentName} rendered ${renderCount.current} times`);
  });

  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    count: renderCount.current,
    reset: () => {
      renderCount.current = 0;
      forceUpdate({});
    },
  };
};

// Visual component to display render count
export const RenderCounter = ({
  componentName,
  count,
  className = '',
  style = {},
}) => {
  const [isFlashing, setIsFlashing] = useState(false);
  const previousCount = useRef(count);

  // Flash when count increases
  useEffect(() => {
    if (count > previousCount.current) {
      // eslint-disable-next-line
      setIsFlashing(true);
      const timer = setTimeout(() => setIsFlashing(false), 200);
      previousCount.current = count;
      return () => clearTimeout(timer);
    }
    previousCount.current = count;
  }, [count]);

  return (
    <div
      className={`render-counter ${className}`}
      style={{
        display: 'inline-block',
        padding: '4px 8px',
        margin: '4px',
        borderRadius: '4px',
        backgroundColor: isFlashing ? '#374151' : '#f3f4f6',
        border: '2px solid #6b7280',
        fontSize: '12px',
        fontWeight: 'bold',
        color: isFlashing ? '#ffffff' : '#6b7280',
        transition: isFlashing
          ? 'background-color 0.1s ease-in, color 0.1s ease-in'
          : 'background-color 0.5s ease-out, color 0.5s ease-out',
        ...style, // Apply custom styles after defaults
      }}
    >
      {componentName}: {count} renders
    </div>
  );
};

// Wrapper component that automatically tracks renders
export const WithRenderCounter = ({ componentName, children }) => {
  const { count } = useRenderCounter(componentName);

  return (
    <div style={{ position: 'relative' }}>
      <RenderCounter componentName={componentName} count={count} />
      {children}
    </div>
  );
};

export default useRenderCounter;
