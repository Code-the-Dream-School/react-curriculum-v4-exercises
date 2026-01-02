// TOPIC: API Caching with useMemo
// TASK: This component makes redundant API calls - optimize with useMemo to cache results

import { useState, useEffect } from 'react';
import { WithRenderCounter } from '../../private/hooks/PerformanceMeasurement';
import SearchAndSort from './SearchAndSort';

const PostManager = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [sortBy, setSortBy] = useState('id');

  // This useEffect runs on every render due to function recreations
  useEffect(() => {
    // TODO: This fetches posts on EVERY render when dependencies change
    // TASK: Wrap this with useMemo to cache the API call results
    const fetchPosts = async () => {
      setLoading(true);
      console.log('🔥 Making API call to fetch posts...'); // Shows redundant calls

      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const postsData = await response.json();
        setPosts(postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }

      setLoading(false);
    };

    // TODO: This fetches users on EVERY render
    // TASK: Wrap this with useMemo to cache the API call results
    const fetchUsers = async () => {
      console.log('🔥 Making API call to fetch users...'); // Shows redundant calls

      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchPosts();
    fetchUsers();
  }, [searchTerm, selectedUserId, sortBy]); // Triggers on every filter change

  // TODO: This filtering happens on every render even with same inputs
  // TASK: Move this to SearchAndSort component and optimize with useMemo
  const getFilteredPosts = () => {
    console.log('🔄 Filtering posts...'); // Shows expensive operations

    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by user ID
    if (selectedUserId) {
      filtered = filtered.filter(
        (post) => post.userId === parseInt(selectedUserId)
      );
    }

    // Sort posts
    filtered.sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'userId') return a.userId - b.userId;
      return a.id - b.id;
    });

    return filtered;
  };

  const filteredPosts = getFilteredPosts();

  return (
    <WithRenderCounter
      componentName="PostManager"
      style={{ padding: '20px', border: '2px solid #ddd', margin: '10px' }}
    >
      <h2>📚 Post Manager</h2>

      <SearchAndSort
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedUserId={selectedUserId}
        onUserChange={setSelectedUserId}
        sortBy={sortBy}
        onSortChange={setSortBy}
        users={users}
      />

      {loading && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <div>⏳ Loading posts...</div>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h3>Posts ({filteredPosts.length})</h3>
        <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid #eee',
                padding: '10px',
                margin: '5px 0',
                borderRadius: '4px',
              }}
            >
              <h4>
                #{post.id}: {post.title}
              </h4>
              <p>User ID: {post.userId}</p>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {post.body.substring(0, 100)}...
              </p>
            </div>
          ))}
        </div>
      </div>
    </WithRenderCounter>
  );
};

export default PostManager;
