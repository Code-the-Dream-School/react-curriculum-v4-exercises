# Lesson-02 - ReactDOM, Components, JSX, and Troubleshooting

For this exercise you’ll deepen your React foundation by working with ReactDOM, components, and JSX, while organizing your code into multiple files.

## Exercise: Snack Rankings App

In this exercise, you’ll build a small **Snack Rankings** app where you rank your favorite snacks from #1 (favorite) downward.
You’ll create four components, each in its own file in the folder corresponding to lesson-02, and assemble them into a complete app.

## Before Starting

Make sure your Vite development server is running!

1. In your terminal, navigate to your project folder.
2. In your terminal start your app by running the dev script:
3. You should see something like:
   - `VITE v7.1.1  ready in 290 ms ➜  Local:   http://localhost:5173/`
4. Woohoo! 🎉 You’ve successfully spun up your Vite app. Open the local URL in your browser to confirm it’s working.

## Steps

1. In `src/exercises/lesson-02/` create these component files (one component per file):
   - **SnackHeader.jsx**
     - Default export a simple component that returns the app heading.
   - **SnackList.jsx**
     - Default export a component that **contains** an array of snack objects (each with `name` and `rank`, where `1` = favorite).
     - Start with the array ordered from **least favorite to most favorite**.
     - Use JavaScript’s `.toSorted()` to return a new array ordered from **most favorite (rank 1) to least favorite**.
     - Render the sorted snacks as a list (ordered list or using `.map()`).
     - Include at least **3–5** snacks.
   - **SnackFooter.jsx**
     - Default export a small component that returns a fun footer message.

2. Open this file:
   `src/exercises/lesson-02/studentWork.jsx`
   - Import your `SnackApp` component.
   - Render `<SnackApp />` as the main output of this file.

## Proof of completion

Once your Snack Ranking app displays correctly in the browser:

1. Take a screenshot of your rendered page (showing your Snack Ranking App).
2. Save that image in the same directory where you’re working on your component: src/exercises/lesson-02/
3. Commit and push your changes.
4. Submit your pull request (PR) link for review.

---

### Reminder

- ReactDOM (already set up for you) renders your app inside <div id="root"></div> in index.html.

---

Great Job getting through Lesson 02!
You’re building real React apps now. On to Lesson 03!
