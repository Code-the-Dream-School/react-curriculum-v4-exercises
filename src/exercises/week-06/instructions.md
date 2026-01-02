# Week 06: Reusable Components, Refactoring, and Project Organization

## Exercise Objectives

Welcome to Week 06 of the React curriculum! 🎉 This week builds directly on what you've learned about state, effects, and component composition in previous weeks. As React applications grow, placing all logic and UI in a single component quickly becomes difficult to read, reuse, and maintain.

This week, you'll go deeper into:

- Identifying reusable components
- Refactoring large components without breaking behavior
- Extracting non-React logic into helper functions
- Creating custom hooks for reusable stateful logic
- Organizing a React project for scalability

By the end of this week, you should understand how to break large components apart, decide where logic belongs, and structure React projects like real-world codebases.

## Scenario Details

In this week's exercises, you are given one large React component that technically works, but is poorly organized and difficult to maintain.

The component:

- Manages multiple pieces of state
- Fetches data
- Filters data
- Renders UI
- Contains repeated JSX
- Lives in a flat, unstructured project

Your job is to refactor the code step by step, improving structure and readability without changing how the app behaves.

## Instructions

You will complete four refactoring exercises using a single file:

```
src/exercises/week-06/StudentWork.jsx
```

As you complete each exercise, `StudentWork.jsx` should become cleaner, smaller, and more focused on composition. You will create supporting files in `components/`, `hooks/`, and `utils/`, but `StudentWork.jsx` remains the main entry point.

### 1. Extract Reusable Components

- Refactor `StudentWork.jsx` to extract reusable UI into separate components.
- You must extract:
  - A user profile section
  - A task filter button group
  - A single task item
- Each extracted component must:
  - Receive data via props
  - Contain no unnecessary state
  - Be reusable and presentation-focused

### 2. Refactor Without Changing Behavior

- Replace the extracted JSX in `StudentWork.jsx` with your new components.
- The application must behave exactly the same as before:
  - Filtering still works
  - Buttons still respond to clicks
  - Loading behavior does not change

This exercise is about refactoring safely, not adding new features.

### 3. Extract a Helper Function

- Move the task filtering logic out of `StudentWork.jsx`.
- Create a helper function that:
  - Accepts the task list and filter value
  - Returns the filtered tasks
  - Contains no React code
- Place this helper in a `utils/` folder and import it back into `StudentWork.jsx`.

### 4. Extract a Custom Hook and Organize the Project

- Move the data-fetching logic out of `StudentWork.jsx` and into a custom hook.
- The custom hook must:
  - Use `useState` and `useEffect`
  - Manage loading state
  - Return only data (no JSX)

At the same time, organize your project to follow this structure:

```
src/
  components/
  hooks/
  utils/
```

Move files into the appropriate folders and update imports in `StudentWork.jsx`.

## Assessment Criteria

### Exercise #1

- Reusable UI is extracted into separate components
- Components receive data via props
- No unnecessary state is introduced

### Exercise #2

- Application behavior remains unchanged
- Refactored components are used correctly in `StudentWork.jsx`
- No functionality is lost during refactor

### Exercise #3

- Filtering logic is moved to a helper function
- Helper function contains no hooks or JSX
- `StudentWork.jsx` imports and uses the helper correctly

### Exercise #4

- Data-fetching logic is moved to a custom hook
- Hook manages its own state and effects
- Files are placed in appropriate folders
- `StudentWork.jsx` remains the main composed component

## Reminders

- If JSX is repeated, it likely belongs in a component
- If logic is reusable, it likely belongs outside the component
- Custom hooks return data, not UI
- Real-world React codebases keep "page" components small and readable