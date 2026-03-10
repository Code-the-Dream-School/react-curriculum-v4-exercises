# Contributing to React Curriculum v4 Exercises

Thank you for your interest in contributing to the React Curriculum v4 Exercises repository! This guide is intended for **exercise developers and maintainers**, not students. Please read it carefully before making any changes.

---

## Table of Contents

- [Repository Overview](#repository-overview)
- [Exercise Outline](#exercise-outline)
- [Local Development](#local-development)
- [Exercise Style Guide](#exercise-style-guide)
- [GitHub Workflow](#github-workflow)

---

## Repository Overview

This repository provides the lesson exercise files used by students enrolled in Code the Dream's 11-lesson _Introduction to React_ course. Students fork this repository, complete structured exercises inside `src/exercises/lesson-[XX]/studentWork.jsx`, and submit pull requests from their forks for review.

Key directories:

| Path             | Purpose                                                                            |
| ---------------- | ---------------------------------------------------------------------------------- |
| `src/exercises/` | One subdirectory per lesson containing `instructions.md` and `studentWork.jsx`     |
| `src/private/`   | Application framework code — do not modify unless doing framework maintenance      |
| `src/tests/`     | Vitest test files that validate student submissions — do not modify without review |

The student-facing README is the root `README.md`. This `CONTRIBUTING.md` is the contributor/maintainer reference.

---

## Exercise Outline

| Lesson    | Topic                                                                                      |
| --------- | ------------------------------------------------------------------------------------------ |
| Lesson 01 | Introduction to React                                                                      |
| Lesson 02 | ReactDOM, Components, JSX, and Troubleshooting                                             |
| Lesson 03 | Component Lifecycle, Basic Hooks, State, and Props                                         |
| Lesson 04 | Hooks Continued, Events and Handlers                                                       |
| Lesson 05 | Local State and Controlled Components, and Forms                                           |
| Lesson 06 | Reusable Components, Refactoring, and Project Organization                                 |
| Lesson 07 | Data Fetching and UI Update Strategies                                                     |
| Lesson 08 | Advanced Hooks: useCallback and useMemo, Optimizing a React App, and API-based Sort/Search |
| Lesson 09 | Advanced State, useReducer, and useContext                                                 |
| Lesson 10 | React Router & Client-Side Routing                                                         |
| Lesson 11 | Polishing an App for Your Portfolio, App and Data Security, and Deploying a React App      |

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (see `package.json` `engines` field or use the version used by the project's CI)
- npm (bundled with Node.js)

### Setup

```bash
# 1. Clone the repository (maintainers work on branches directly; contributors fork first)
git clone https://github.com/Code-the-Dream-School/react-curriculum-v4-exercises.git
cd react-curriculum-v4-exercises

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The development server starts at `http://localhost:5173` by default. A navigation interface lets you select a lesson and view exercise output.

### Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite development server |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint across the project     |
| `npm test`        | Run the Vitest test suite         |

### Code Quality Tools

The project uses **ESLint** and **Prettier** for consistent code style.

- Prettier is configured in `.prettierrc` and runs automatically via a Husky pre-commit hook (powered by `lint-staged`) on `*.js`, `*.jsx`, `*.css`, and `*.md` files.
- ESLint is configured in `eslint.config.js`.

Run `npm run lint` before opening a pull request to ensure no linting errors are introduced. Linting errors that result from intentionally buggy code added to support an exercise can be safely ignored.

---

## Exercise Style Guide

Follow these conventions when drafting or updating lesson exercises.

### File Structure

Each lesson must contain at least these two files, but can also include additional component files, data files, custom hooks, helper functions, stylesheets, or any other supporting files the exercise requires:

```
src/exercises/lesson-[XX]/
├── instructions.md        # Student-facing narrative and task list
├── studentWork.jsx        # Main starter file students edit
└── [optional extras]      # e.g., api.js, components/, hooks/, *.css
```

### `instructions.md`

A starter template is available at [`instructions-template.md`](instructions-template.md). Copy it into the new lesson's directory as `instructions.md` and fill in the placeholders.

Guidelines for the file:

- Begin with a top-level heading: `# Lesson-[XX] <Topic Title>`
- Include an **Exercise Objectives** section that lists specific, measurable learning goals as a bulleted list.
- Include a **Scenario Details** section that gives context for the exercise scenario (the fictional app, data, or problem students are solving).
- Break tasks into numbered steps under an **Instructions** (or equivalent) section.
- Use fenced code blocks (` ```jsx `) for all code examples.
- Keep language clear, approachable, and consistent with the previous lessons' tone.
- Avoid referencing lesson numbers in prose where possible to reduce update burden when lessons are reordered.

### `studentWork.jsx`

- Provide only the minimum scaffolding students need — imports, a default-exported component shell, and `TODO` comments marking each task.
- Use `// TODO:` comments (all-caps, with colon) to mark each task location.
- Include any required imports at the top of the file, commented out if students must add them as part of the exercise.
- Do not include solution code.
- Keep variable and component names consistent with the names used in `instructions.md`.

### General Style

- Use American English spelling.
- Use title case for headings (e.g., `## Exercise Objectives`, `## Scenario Details`) — match the style already established in existing lessons.
- Prefer concrete, realistic scenarios over abstract toy examples.
- Each lesson should be completable as a standalone exercise; avoid hard dependencies on the student's exact solution from a prior lesson.
- Test files in `src/tests/` are optional at this time — their adoption is a work in progress. If a test file exists for the lesson you are modifying, update it to stay in sync with your changes.

---

## GitHub Workflow

### Branch Naming

Branches are named after their associated GitHub issue to keep project boards up-to-date automatically.

Format:

```
<type>/issue-<number>-<short-description>
```

Examples:

```
feat/issue-42-add-lesson-12-exercise
fix/issue-17-lesson-05-typo
docs/issue-8-update-contributing
```

Supported types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`.

Using this naming convention ensures that GitHub's automatic issue tracking links the branch to the issue and moves it through the project board as the PR progresses.

### Pull Request Process

1. **Open an issue** (or pick up an existing one) describing the change.
2. **Create a branch** — use the "Create a branch" option directly in the GitHub issue interface (preferred), which automatically links the branch to the issue, or create one manually off `main` following the naming convention above.
3. **Make your changes** following the style guide.
4. **Run lint** locally, and run tests if a test file exists for the changed lesson (test adoption is a work in progress):
   ```bash
   npm run lint
   npm test   # optional — only if tests exist for the affected lesson
   ```
   Fix any linting errors that appear. Errors caused by intentionally buggy exercise code can be safely ignored.
5. **Open a pull request** from your branch to `main`.
   - Reference the issue in the PR description using `Closes #<number>` or `Fixes #<number>`.
   - Provide a brief summary of what changed and why.
6. **Request a review** from at least one other maintainer.
7. **Squash and merge** after approval.

### Commit Messages

Use the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <short description>

[optional body]
```

Examples:

```
docs(lesson-05): clarify controlled component task wording
fix(lesson-08): correct useMemo dependency array in starter file
feat(lesson-12): add new routing exercise
```

---

By contributing to this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).
