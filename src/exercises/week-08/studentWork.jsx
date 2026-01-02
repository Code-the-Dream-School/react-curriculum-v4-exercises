import PostManager from './PostManager';

export default function StudentWork() {
  return (
    <div>
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          marginBottom: '20px',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
        }}
      >
        <h1>🚀 Week 08 - Advanced Hooks & Performance Optimization</h1>
        <p>
          This exercise demonstrates performance optimization with{' '}
          <code>useCallback</code> and <code>useMemo</code>.
        </p>

        <div
          style={{
            backgroundColor: '#fff3cd',
            padding: '10px',
            borderRadius: '4px',
            marginTop: '10px',
          }}
        >
          <strong>⚠️ Current Issues:</strong>
          <ul>
            <li>API calls happen on every filter change</li>
            <li>Components re-render unnecessarily</li>
            <li>Expensive operations run repeatedly</li>
            <li>Event handlers recreate on every render</li>
          </ul>
        </div>
        <p>
          <strong>Watch the render counters</strong> in the top-right corners of
          each component!
        </p>
      </div>

      <PostManager />
    </div>
  );
}
