// Create variable //
const manager = require('../lib/manager');

// Begin with manager object //
test('Create manager object', () => {
  const mgr = new manager();
  expect(typeof(mgr)).toBe('object');
});
    // Name //
test('Create manager name', () => {
  const name = 'Olivia Pope';
  const mgr = new manager(name);
  expect(mgr.name).toBe(name);
});
    // ID //
test('Create manager ID', () => {
  const testValue = M4562F;
  const mgr = new manager('Olivia Pope', testValue);
  expect(mgr.id).toBe(testValue);
});
    // Email //
test('Create manager email address', () => {
  const testValue = 'manager@oliviapope.com';
  const mgr = new manager('Olivia Pope', M4562F, testValue);
  expect(mgr.email).toBe(testValue);
});
    // Office Phone Number //
test('Create office phone number', () => {
  const testValue = '(415) 415-4154';
  const mgr = new manager('Olivia Pope', M4562F, 'manager@oliviapope.com', testValue);
  expect(mgr.github).toBe(testValue);
});


// Get information //
test('Get office phone number', () => {
    const testValue = '(415) 415-4154';
    const mgr = new manager('Olivia Pope', M4562F, 'manager@oliviapope.com', testValue);
    expect(mgr.getOfficeNumber()).toBe(testValue);
  });

test('Gets manager role', () => {
    const testValue = 'manager';
    const mgr = new manager('Olivia Pope', M4562F, 'manager@oliviapope.com', '(415) 415-4154');
    expect(mgr.getRole()).toBe(testValue);
  });
  