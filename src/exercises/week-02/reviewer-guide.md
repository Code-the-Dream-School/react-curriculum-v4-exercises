# Week 02 – Reviewer Guide

This guide outlines what to check for when reviewing a student’s Week 02 submission.

## ✅ What to Check

### File
- Student is working in: `src/exercises/week-02/studentWork.jsx`
- The file exports a React component.
- `<SnackApp />` is imported and rendered correctly.

### Component Files
Check that these files exist in `src/exercises/week-02/` and each has a **default export**:

- `SnackHeader.jsx`
- `SnackList.jsx`
- `SnackFooter.jsx`
- `SnackApp.jsx` (composes all three together)

### Inside Each Component

#### **SnackHeader.jsx**
- Returns a heading/title for the app.

#### **SnackList.jsx**
- Contains an **array of snack objects** with `{ name, rank }`.
- Array initially ordered from **least favorite → most favorite**.
- Uses `.sort()` to produce a new array ordered from **rank 1 (favorite) → least favorite**.
- Renders the sorted snacks as a list (ordered list or `.map()`).
- Includes **3–5 snacks minimum**.

#### **SnackFooter.jsx**
- Returns a small footer message.

#### **SnackApp.jsx**
- Imports and renders `SnackHeader`, `SnackList`, and `SnackFooter`.

### JSX Output
- Final UI shows:
  - A heading
  - A sorted snack list
  - A footer message

### Quality
- All components export and import correctly.
- JSX is valid and renders without errors.
- Sorting logic is correct.
- No unnecessary complexity (no hooks, state, etc., for this week).
- Proof of completion is included if required (e.g., screencap of the running app).

## ❌ Common Issues to Watch For
- Missing component files or missing default exports.
- Snack array not sorted correctly.
- Snacks hard-coded directly in JSX instead of in an array.
- `<SnackApp />` not rendered in `studentWork.jsx`.
- Broken imports or incorrect file paths.
