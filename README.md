# React Curriculum v4 Exercises

> [!WARNING]
> **Always work on your own forked repository. Do NOT create pull requests against the original Code-the-Dream-School repository.**

This repository contains weekly exercises for Code the Dream's 11-week Introduction to React. Each week builds upon previous concepts, covering everything from basic React fundamentals to advanced topics like routing and deployment. Students will work through structured exercises that reinforce core React development skills and best practices.

## Getting Started

### Setup

1. **Fork and clone locally**: Fork this repository to your GitHub account, then clone your fork to your local machine
2. **Install dependencies**: Run `npm install` to install all required packages

### Repository Structure

- `src/exercises/` - Contains directories for each week's assignments and instructions
- `src/private/` - Application framework code (do not modify)
- `src/tests/` - Test files for validating your work (do not modify)

### User Interface

Run `npm run dev` to start the development server. The application displays a navigation interface where you can select different weeks. Each week's page shows your code outputs. Your work in each week's `studentWork.jsx` file will be rendered and displayed on that week's page. Depending on the exercise scenario, it may render with an error.

## Weekly Exercise Workflow

> [!WARNING]
> **Always work on your own forked repository. Do NOT create pull requests against the original Code-the-Dream-School repository.**

1. **Version Control Setup**
   - Merge previous week's approved pull request into main branch
   - Create new weekly branch from main

2. **Read Instructions**
   - Navigate to `src/exercises/week-[XX]/instructions.md`
   - Review the week's learning objectives and requirements

3. **Complete Exercises**
   - Open `src/exercises/week-[XX]/studentWork.jsx`
   - Follow instructions to implement required functionality
   - Test your work using `npm run dev`

4. **Commit and Publish**
   - Stage and commit your changes with descriptive message
   - Push your branch to your fork

5. **Create Pull Request**
   - Open a PR from your branch to your fork's main branch
   - Copy the PR URL for submission

### Submission Links

✅ **Correct PR link format:**
`https://github.com/your-username/react-curriculum-v4-exercises/pull/1`

❌ **Incorrect link format:**
`https://github.com/your-username/react-curriculum-v4-exercises` (repository link)
`https://github.com/your-username/react-curriculum-v4-exercises/tree/exercise-week01` (branch link)

## Code Quality Tools

This project includes ESLint and Prettier to help maintain consistent code quality and formatting. We strongly recommend installing the VS Code extensions for the best development experience.

### Recommended VS Code Extensions

1. **ESLint Extension**
   - Search for "ESLint" in VS Code Extensions marketplace
   - Install the official ESLint extension by Microsoft
   - Provides real-time linting and error highlighting

2. **Prettier Extension**
   - Search for "Prettier - Code formatter" in VS Code Extensions marketplace
   - Install the official Prettier extension
   - Enables automatic code formatting on save

### Usage

- **ESLint**: Run `npm run lint` to check for code quality issues
- **Prettier**: Your code will be automatically formatted when you save files (if extension is installed)
- Both tools are pre-configured for this project and will help you write cleaner, more consistent React code
