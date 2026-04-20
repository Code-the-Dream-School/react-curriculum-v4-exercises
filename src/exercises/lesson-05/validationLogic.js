export function validateName(name) {
  return name.trim().length > 0;
}

export function validateRating(rating) {
  return rating !== '';
}

export function getNameError(name, touched) {
  if (!touched) return '';
  if (!validateName(name)) return 'Snack name is required';
  return '';
}

export function getRatingError(rating, touched) {
  if (!touched) return '';
  if (!validateRating(rating)) return 'Please select a rating';
  return '';
}
