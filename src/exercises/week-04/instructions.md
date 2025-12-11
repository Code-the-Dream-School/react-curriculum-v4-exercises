# Week 04: Hooks Continued, Events and Handlers

## Exercise Objectives

Welcome to Week 04 of the React curriculum! 🎉 This week builds directly on what you learned about state and effects in Week 03. You'll go deeper into:

- Handling StrictMode's double effect invocation
- Cleanup functions for effects
- When to use `useRef` vs `useState`
- Using refs for DOM manipulation
- Event bubbling & `stopPropagation()`
- Child → parent communication using callback props

By the end of this week, you should understand how React actually runs your code, how events flow, and how to work with refs like a real React developer.

---

## Scenario Details

In this week's exercises, you'll be working through five broken or incomplete React components. Each component contains a bug or missing logic related to:

- Effects
- Refs
- DOM access
- Event propagation
- Callback communication

Your job is to fix the components, understand why they were broken, and write a short explanation inside each file.

---

## Instructions

You will complete five exercises in the `src/exercises/week-04/` folder:

### 1. BugStrictMode.jsx

- This component uses `useEffect` but does not clean up properly.
- In StrictMode, this causes the effect to run twice, creating duplicate timers.
- Fix the timer so it cleans up correctly.

### 2. FindCorrectHook.jsx

- You must decide whether to use `useRef` or `useState`.
- The value should update without causing re-renders, and the UI should only display it when requested.

### 3. BugEventPropagation.jsx

- Clicking the child button also triggers the parent's click handler.
- Use your knowledge of event bubbling to stop the event at the correct level.

### 4. FillRefFocus.jsx

- Imperatively focus the input when the button is clicked

### 5. BugChildParent.jsx

- Make the child update the parent's counter

---

## Assessment Criteria
Open this file:  
   `src/exercises/week-04/studentWork.jsx`  
   - Import all the exercise files
   - Render them inside the `StudentWork` component so all appear on the page and make sure the page loads without errors  
   - Verify that each component now behaves according to the task assigned
   - Check the console to ensure no warnings appear

---

## Reminders

- React's StrictMode intentionally double-invokes effects to help you catch side effects that would normally go unnoticed but become problematic when a component mounts multiple times, such as during navigation or conditional rendering.
- `useRef` changes do not cause re-renders — use this for values that must persist but shouldn't trigger UI updates.
- DOM manipulation through refs should be used sparingly — React prefers declarative UI first.
- Event bubbling starts from the deepest element and moves upward unless stopped.
- React only re-renders when state changes — not when normal variables change.
- Reload your page after each fix, and check the console for any remaining issues.