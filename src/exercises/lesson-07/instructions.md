# Lesson-07 Data Fetching and UI Update Strategies

## Exercise objectives

Welcome to Lesson 07 of the React curriculum! 🎉 For this exercise builds on what you've learned about fetching data and updating your UI.

## Scenario details

In lesson-07's exercises, you're going to build two components that fetch and display data from an API.

- `<FetchOnRender />`: This component fetches _a list of posts_ as soon as it renders, then displays them.
- `<FetchOnClick />`: This component fetches _a single post_ when a button is clicked, then displays that post.

These components are partially implemented; your job is to complete them.

## Instructions

### The relevant files

To complete these exercises, you will work in the following files:

- `src/exercises/lesson-07/FetchOnRender.jsx`: This is the component that fetches a list of posts as soon as it's rendered.
- `src/exercises/lesson-07/FetchOnClick.jsx`: This is the component that fetches a single post when a button inside of it is clicked.
- `src/exercises/lesson-07/api.js`: This is where the functions used to fetch posts will live.

**Note:** You do not need to modify `src/exercises/lesson-07/studentWork.jsx` — it already imports and uses the relevant components for you.

### The data

The post data comes from a fake online REST API called [JSONPlaceholder](https://jsonplaceholder.typicode.com). JSONPlaceholder is a free service that returns mock data — in our case, some mock blog posts.

Functionality for interacting with JSONPlaceholder is partially implemented in `src/exercises/lesson-07/api.js`. You will complete the implementations of the following two functions:

- `getPosts()`: Fetches a list of posts.
- `getSinglePost(postId)`: Fetches a single post by its ID.

### 1. Fetching data on render

- In `FetchOnRender.jsx`, import the `getPosts()` function from `src/exercises/lesson-07/api.js`.
- When the component renders, call `getPosts()`.
  - **Note:** This function doesn't do anything yet! You need to finish the logic to make a fetch request in `src/exercises/lesson-07/api.js`.
- Once `getPosts()` returns data, display the list of posts in the component.
- Each post should display its `title` and `body`. Render these in an `<h2>` and a `<p>`, respectively.

### 2. Fetching data on click

- In `FetchOnClick.jsx`, import the `getSinglePost()` function from `src/exercises/lesson-07/api.js`.
- When the user clicks the `Get post` button, call `getSinglePost()` with the ID of the post you want to fetch (you can use `1` for this exercise).
  - **Note:** This function doesn't do anything yet! You need to finish the logic to make a fetch request in `src/exercises/lesson-07/api.js`.
- Once `getSinglePost()` returns data, display the post in the component.
- The post should display its `title` and `body`. Render these in an `<h2>` and a `<p>`, respectively.

### 3. Stretch goals

- For both components, add loading states that display while data is being fetched.
- For both components, implement error handling that displays an error message if the fetch fails.
- The `getPosts()` function returns 100 posts at a time! You can limit this by adding the query parameter `?_limit=10` to the URL used in the fetch request. This will limit the results to 10 posts.
