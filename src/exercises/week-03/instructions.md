# Week-03 Component Lifecycle, Basic Hooks, State, and Props

Welcome to **Week 03** of the React curriculum! 🎉
This week, you’ll begin working with state, props, and basic hooks and just as importantly, you’ll start learning how to debug React code like a real developer.

## Exercise: React Bug Hunt

You’ll be given **three small React components**, and each one contains a bug tied to this week’s concepts:

- Bug #1 — Effect bug (lifecycle/logic issue)

- Bug #2 — Mutated State

- Bug #3 — Props Not Updating UI

Your job is to fix each bug and write a short explanation of what went wrong.

> **Important:** Each bug file already includes a commented  
> **"Explanation" section at the bottom of the component.**  
> Write your explanation inside that section after fixing the bug.

## Steps

1. In `src/exercises/week-03/` open the three bug files provided:
   - **BugEffectLoop.jsx** (Bug #1)
   - **BugMutatedState.jsx** (Bug #2)
   - **BugProps.jsx** (Bug #3)

2. Fix Bug #1 — Effect Issue
   - This component has a `useEffect` that runs on every `render`.
   - This component is meant to update a value when it first appears on the screen.
   - However, the current `effect` fires on **every** `render`, which causes the component to behave incorrectly.
   - Update the `effect` so that it only runs **once** when the component `mounts`.

- After fixing it, write your explanation in the **Explanation** section at the bottom of the file.

3. Fix Bug #2 — Mutated State
   - This component displays a `count` and updates it when the button is clicked.
   - There is an issue with how the `count` value is being changed.
   - Review how the `state` update is written and adjust it so React can properly detect the change and re-render the component.

- After fixing it, write your explanation in the **Explanation** section at the bottom of the file.

4. Fix Bug #3 — Props Not Updating
   - This component displays a `message` based on a `prop` and includes a button that attempts to change that message.
   - Right now, the `message` is stored in a way that React does not track, so the UI does not update when it changes.
   - Review how the `message` is being stored and updated. React only re-renders when values are managed through `state`, not regular variables.
   - Adjust the component so the `message` is stored in a way React can monitor, allowing the UI to update when the button is clicked.

- After fixing it, write your explanation in the **Explanation** section at the bottom of the file.

5. Open this file:  
   `src/exercises/week-03/studentWork.jsx`
   - Import your three bug components
   - Render them inside the `StudentWork` component so all three appear on the page

6. Test your fixes
   - Make sure the page loads without errors
   - Verify that each component now behaves as expected
   - Check the console to ensure no warnings appear

## Proof of Completion

Once all three bug components display and behave correctly in the browser:

1. Take a screenshot of your rendered page showing all three fixed components.
2. Save that image in the same directory where you’re working on your components:  
   `src/exercises/week-03/`
3. Commit and push your changes.
4. Submit your pull request (PR) link for review.

---

### Reminder

- React is already set up to render your work inside the <div id="root"></div> element in your app’s entry file.
- Make sure to reload the page and check the console for any remaining issues before submitting.

---

You crushed Week 03! 🎉
Debugging isn’t easy, and you handled it like a real React dev. Take a breath, celebrate the win, and let’s roll into Week 04!
