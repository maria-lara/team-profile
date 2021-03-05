// Create variable //
const Manager = require('../lib/manager');

// Begin with manager object //
test('Create manager object', () => {
  const mgr = new Manager();
  expect(typeof(mgr)).toEqual('object');
});
    // Name //
test('Create manager name', () => {
  const name = 'Olivia Pope';
  const mgr = new Manager(name);
  expect(mgr.name).toEqual(name);
});
    // ID //
test('Create manager ID', () => {
  const testValue = 'M4562F';
  const mgr = new Manager('Olivia Pope', testValue);
  expect(mgr.id).toEqual(testValue);
});
    // Email //
test('Create manager email address', () => {
  const testValue = 'manager@oliviapope.com';
  const mgr = new Manager('Olivia Pope', 'M4562F', testValue);
  expect(mgr.email).toEqual(testValue);
});
    // Office Phone Number //
test('Create office phone number', () => {
  const testValue = '(415) 415-4154';
  const mgr = new Manager('Olivia Pope', 'M4562F', 'manager@oliviapope.com', testValue);
  expect(mgr.officeNumber).toEqual(testValue);
});


// Get information //
test('Get office phone number', () => {
    const testValue = '(415) 415-4154';
    const mgr = new Manager('Olivia Pope', 'M4562F', 'manager@oliviapope.com', testValue);
    expect(mgr.getOfficeNumber()).toEqual(testValue);
  });

test('Gets manager role', () => {
    const testValue = 'Manager';
    const mgr = new Manager('Olivia Pope', 'M4562F', 'manager@oliviapope.com', '(415) 415-4154');
    expect(mgr.getRole()).toEqual(testValue);
  });
  