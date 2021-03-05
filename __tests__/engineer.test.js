// Create variable //
const Engineer = require('../lib/engineer');

// Begin with engineer object //
test('Create engineer object', () => {
  const eng = new engineer();
  expect(typeof(eng)).toBe('object');
});
    // Name //
test('Create engineer name', () => {
  const name = 'Khalessi';
  const eng = new engineer(name);
  expect(eng.name).toBe(name);
});
    // ID //
test('Create engineer ID', () => {
  const testValue = A123X;
  const eng = new engineer('Kahlessi', testValue);
  expect(eng.id).toBe(testValue);
});
    // Email //
test('Create engineer email address', () => {
  const testValue = 'mother@dragons.com';
  const eng = new engineer('Khalessi', A123X, testValue);
  expect(eng.email).toBe(testValue);
});
    // GitHub //
test('Create engineer github account', () => {
  const testValue = 'motherofdragons';
  const eng = new engineer('Khalessi', A123X, 'mother@dragons.com', testValue);
  expect(eng.github).toBe(testValue);
});


// Get information //
test('Get GitHub username', () => {
    const testValue = 'githubun';
    const eng = new Engineer('Khalessi', A123X, 'mother@dragons.com', testValue);
    expect(eng.getGithub()).toBe(testValue);
  });

test('Gets employee role', () => {
    const testValue = 'Engineer';
    const eng = new Engineer('Khalessi', A123X, 'mother@dragons.com', 'motherofdragons');
    expect(eng.getRole()).toBe(testValue);
  });
  
 