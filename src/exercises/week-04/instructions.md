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

- Fix the timer so it increments by 1 instead of by 2.

### 2. FindCorrectHook.jsx

- Refactor the component so that the click counter increments.
- You must decide whether to use `useRef` or `useState`.

### 3. BugEventPropagation.jsx

- Prevent clicks in button from bubbling up to the event listener on the box with the red border.

### 4. FillRefFocus.jsx

- Imperatively re-focus the input when the button is clicked.

### 5. BugChildParentCommunication/Child.jsx and BugChildParentCommunication/Parent.jsx

- Refactor components so that Child's button updates Parent's counter

---

## Assessment Criteria

- **Exercise #1:**
  - [ ] `useEffect` includes a cleanup function
  - [ ] The number increments by one in the UI
- **Exercise #2**
  - [ ] Helper function is refactored to use appropriate hook to manage `clickCount`
  - [ ] The Clicks's counter in the button increments
- **Exercise #3**
  - [ ] Clicking the inner button results in only one alert: "Button Clicked ✅"
  - [ ] Clicking outside the button but inside the box with the red outline still alerts "RED BOX CLICKED ❌ Don't show me!"
- **Exercise #4**
  - [ ] After the "Focus Input" button is clicked the user can type into the input field without having to select it.
- **Exercise #5**
  - [ ] state is managed in Parent
  - [ ] button in Child updates the counter using helper function in Parent
  - [ ] The "Increment Counter" button results in the counter incrementing

---

## Reminders

- React's StrictMode intentionally double-invokes effects to help you catch side effects that would normally go unnoticed but become problematic when a component mounts multiple times, such as during navigation or conditional rendering.
- `useRef` changes do not cause re-renders — use this for values that must persist but shouldn't trigger UI updates.
- DOM manipulation through refs should be used sparingly — React prefers declarative UI first.
- Event bubbling starts from the deepest element and moves upward unless stopped.
- React only re-renders when state changes — not when normal variables change.
- Reload your page after each fix, and check the console for any remaining issues.
