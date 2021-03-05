// Create variable //
const Engineer = require('../lib/engineer');

// Begin with engineer object //
test('Create engineer object', () => {
  const eng = new Engineer();
  expect(typeof(eng)).toEqual('object');
});
    // Name //
test('Create engineer name', () => {
  const name = 'Khalessi';
  const eng = new Engineer(name);
  expect(eng.name).toEqual(name);
});
    // ID //
test('Create engineer ID', () => {
  const testValue = 'A123X';
  const eng = new Engineer('Kahlessi', testValue);
  expect(eng.id).toEqual(testValue);
});
    // Email //
test('Create engineer email address', () => {
  const testValue = 'mother@dragons.com';
  const eng = new Engineer('Khalessi', 'A123X', testValue);
  expect(eng.email).toEqual(testValue);
});
    // GitHub //
test('Create engineer github account', () => {
  const testValue = 'motherofdragons';
  const eng = new Engineer('Khalessi', 'A123X', 'mother@dragons.com', testValue);
  expect(eng.github).toEqual(testValue);
});


// Get information //
test('Get GitHub username', () => {
    const testValue = 'github';
    const eng = new Engineer('Khalessi', 'A123X', 'mother@dragons.com', testValue);
    expect(eng.getGithub()).toEqual(testValue);
  });

test('Gets employee role', () => {
    const testValue = 'Engineer';
    const eng = new Engineer('Khalessi', 'A123X', 'mother@dragons.com', 'motherofdragons');
    expect(eng.getRole()).toEqual(testValue);
  });
  
 