function genPrefix(firstName) {
  return firstName.length > 5 ? 'Shelfy' : 'The One and Only';
}

function genFirstName(firstName) {
  const firstLetter = firstName.charAt(0).toLowerCase();
  if (firstLetter === 'a') return 'Sammy';
  if (firstLetter === 'b') return 'Dan';
  if (firstLetter === 'c') return 'Flury';
  if (firstLetter === 'd') return 'David';
  return 'Elfy';
}

function genMiddleName(roadType, favoriteColor) {
  if (roadType === 'road') return `${favoriteColor}ridge`;
  if (roadType === 'street') return `${favoriteColor}son`;
  return `${favoriteColor}corner`;
}

function genLastName(lastName) {
  const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
  if (lastLetter === 'a') return 'Shadow';
  if (lastLetter === 'e') return 'Storm';
  if (lastLetter === 'i') return 'Blaze';
  if (lastLetter === 'o') return 'Thorn';
  if (lastLetter === 'u') return 'Frost';
  return 'Moon';
}

function capitalize(input) {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
