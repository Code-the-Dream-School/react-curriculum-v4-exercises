# Lesson-05 Local State and Controlled Components, and Forms

## Exercise Objectives

In this exercise, you'll use local state management to convert an uncontrolled form to a controlled one. You'll also add live field validation to improve the user's experience. By the end, you'll better understand how controlled components provide better predictability and user experience compared to uncontrolled forms that rely on the DOM for state management.

## Scenario Details

You are working on a **Snack Manager** application that allows users to add, edit, and delete their favorite snacks with ratings. The application currently has a working uncontrolled form that uses [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) to extract values when the form is submitted.

Your task has **three parts**:

1. **Convert the uncontrolled form to controlled** using React state management
2. **Add real-time validation** with user-friendly error messages
3. **Update form submission** to work with controlled inputs and validation

This progression will give you hands-on experience with controlled components and form best practices in React.

### What You'll Be Working With

- **SnackManager.jsx**: A parent component that manages the list of snacks (already complete)
- **SnackForm.jsx**: An uncontrolled form component that you need to convert (your main task)
- The form handles both adding new snacks and editing existing ones
- Each snack has a name (text input) and rating (number input from 1-5)

## Part 1: Convert to Controlled Component

First, you'll convert the uncontrolled form to use React state management instead of relying on the DOM.

### Step 1: Create State Variables

- [ ] Add `name` state using `useState("")` for the snack name input
- [ ] Add `rating` state using `useState("")` for the rating input
- [ ] Add `touched` state using `useState({ name: false, rating: false })` to track which fields the user has interacted with (prevents showing errors before user tries to use a field)

### Step 2: Add Form Population Effect

- [ ] Create a `useEffect` that runs when `editingSnack` changes
- [ ] If editing, populate the form fields with the snack's current values
- [ ] If not editing, reset the form fields to empty values
- [ ] Reset the `touched` state when switching between add/edit modes

### Step 3: Convert Inputs to Controlled

- [ ] Replace `defaultValue` with `value` prop for both inputs
- [ ] Connect each input's `value` to its respective state variable
- [ ] Add `onChange` handlers for both inputs that update the corresponding state variable
- [ ] Add `onFocus` handlers for both inputs that mark the field as touched when user clicks/focuses on it:
  - For name: `setTouched(prev => ({ ...prev, name: true }))`
  - For rating: `setTouched(prev => ({ ...prev, rating: true }))`

## Part 2: Update Form Validation

Next, you'll add validation to provide immediate feedback to users.

### Step 1: Allow React to Manage Validation

- [ ] Remove the `required` attribute from the input elements

### Step 2: Create Validation Functions

- [ ] Create `validateName()` function that returns `true` if name is not empty after trimming
- [ ] Create `validateRating()` function that returns `true` if rating is selected (not empty)
- [ ] Create `getNameError()` function that returns error message if name is invalid AND touched
  - Example: `"Snack name is required"`
- [ ] Create `getRatingError()` function that returns error message if rating is invalid AND touched
  - Example: `"Please select a rating"`

### Step 3: Display Validation Messages

- [ ] Add error message display below each input field
- [ ] Show error messages only when the field has been touched AND is invalid
- [ ] Use the existing CSS error styles: `{errorMessage && <div className={styles.error}>{errorMessage}</div>}`
- [ ] Test that validation appears only after field interaction

### Validation Requirements

- **Name field**: Must not be empty after trimming whitespace
- **Rating field**: Must be selected (not empty) - the HTML input's `min="1"` and `max="5"` attributes already handle the numerical range validation
- **Timing**: Error messages should only appear **after a field has been touched**

## Part 3: Update Form Submission

Finally, you'll modify the form submission to work with your controlled inputs and validation.

### Step 1: Modify handleSubmit Function

- [ ] Remove the `FormData` extraction from `handleSubmit`
- [ ] Use your state variables (`name` and `rating`) directly
- [ ] Add validation check before submission - prevent submit if any field is invalid
- [ ] For non-editing submissions, reset state values instead of using `e.target.reset()`
- [ ] Mark all fields as touched if user tries to submit invalid form

### Expected Behavior After Completion

- Form values are controlled by React state
- Real-time validation with inline error messages
- Form populates correctly when editing existing snacks
- Form resets properly after successful submission
- Cannot submit invalid forms
- User-friendly error feedback

## Assessment Criteria

Your converted controlled component should:

✅ **State Management**

- Use `useState` for name, rating, and touched fields
- Properly initialize and update state values
- Use `useEffect` to populate form during editing

✅ **Controlled Inputs**

- Both inputs use `value` prop connected to state
- Both inputs have `onChange` handlers that update state
- No `defaultValue` attributes remaining

✅ **Validation**

- Validate name is not empty (after trimming)
- Validate rating is selected and in range 1-5
- Show validation errors only after field is touched
- Prevent form submission when validation fails

✅ **Form Behavior**

- Form populates correctly when editing existing snacks
- Form resets after successful add operations
- Editing cancellation works properly
- All parent component integration maintained

✅ **User Experience**

- Clean, readable error messages
- Validation feedback appears inline with inputs
- Form is responsive to user interactions

## Reminders

- **Start small**: Convert one input at a time rather than everything at once
- **Test frequently**: Check that each step works before moving to the next
- **Preserve functionality**: The parent component's snack management should continue working exactly as before
- **Focus on local state**: You're only changing how the form manages its input values, not the overall application state
- **Validation timing**: Remember that validation errors should only show AFTER a field has been touched
- **State updates are asynchronous**: If you need to use updated state immediately, consider the dependency in `useEffect`
