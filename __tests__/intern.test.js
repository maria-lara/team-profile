// Create variable //
const Intern = require('../lib/intern');

// Begin with intern object //
test('Create intern object', () => {
  const int = new Intern();
  expect(typeof(int)).toEqual('object');
});
    // Name //
test('Create intern name', () => {
  const name = 'Kaya Khalifa';
  const int = new Intern(name);
  expect(int.name).toEqual(name);
});
    // ID //
test('Create intern ID', () => {
  const testValue = 'A8D453';
  const int = new Intern('Kaya Khalifa', testValue);
  expect(int.id).toEqual(testValue);
});
    // Email //
test('Create intern email address', () => {
  const testValue = 'kaya@khalifa.com';
  const int = new Intern('Kaya Khalifa', 'A8D453', testValue);
  expect(int.email).toEqual(testValue);
});
    // School //
test('Create intern school', () => {
  const testValue = 'UC Davis';
  const int = new Intern('Kaya Khalifa', 'A8D453', 'kaya@khalifa.com', testValue);
  expect(int.school).toEqual(testValue);
});


// Get information //
test('Get school name', () => {
    const testValue = 'UC Davis';
    const int = new Intern('Kaya Khalifa', 'A8D453', 'kaya@khalifa.com', testValue);
    expect(int.getSchool()).toEqual(testValue);
  });

test('Gets intern role', () => {
    const testValue = 'Intern';
    const int = new Intern('Kaya Khalifa', 'A8D453', 'kaya@khalifa.com', 'UC Davis');
    expect(int.getRole()).toEqual(testValue);
  });
  