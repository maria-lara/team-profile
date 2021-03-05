// Create variable //
const Intern = require('../lib/intern');

// Begin with intern object //
test('Create intern object', () => {
  const int = new intern();
  expect(typeof(int)).toBe('object');
});
    // Name //
test('Create intern name', () => {
  const name = 'Kaya Khalifa';
  const int = new intern(name);
  expect(int.name).toBe(name);
});
    // ID //
test('Create intern ID', () => {
  const testValue = A8D453;
  const int = new intern('Kaya Khalifa', testValue);
  expect(int.id).toBe(testValue);
});
    // Email //
test('Create intern email address', () => {
  const testValue = 'kaya@khalifa.com';
  const int = new intern('Kaya Khalifa', A8D453, testValue);
  expect(int.email).toBe(testValue);
});
    // School //
test('Create intern school', () => {
  const testValue = 'UC Davis';
  const int = new intern('Kaya Khalifa', A8D453, 'kaya@khalifa.com', testValue);
  expect(int.github).toBe(testValue);
});


// Get information //
test('Get school name', () => {
    const testValue = 'UC Davis';
    const int = new intern('Kaya Khalifa', A8D453, 'kaya@khalifa.com', testValue);
    expect(int.getSchool()).toBe(testValue);
  });

test('Gets intern role', () => {
    const testValue = 'intern';
    const int = new intern('Kaya Khalifa', A8D453, 'kaya@khalifa.com', 'UC Davis');
    expect(int.getRole()).toBe(testValue);
  });
  