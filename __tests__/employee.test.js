// Create variable //
const Employee = require('../lib/Employee');

// Begin with employee object //
test('Create employee object', () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe('object');
});
    // Name //
test('Create employee name', () => {
  const name = 'Lara Croft';
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});
    // ID //
test('Create employee ID', () => {
  const testValue = A1C24;
  const emp = new Employee('Lara Croft', testValue);
  expect(emp.id).toBe(testValue);
});
    // Email //
test('Create employee email address', () => {
  const testValue = 'lc@gmail.com';
  const emp = new Employee('Lara Croft', A1C24, testValue);
  expect(emp.email).toBe(testValue);
});

// Get information //
  // Name //
test('Gets employee name', () => {
  const testValue = 'Lara Croft';
  const emp = new Employee(testValue);
  expect(emp.getName()).toEqual(testValue);
});
  // ID //
test('Gets employee ID', () => {
  const testValue = A1C24;
  const emp = new Employee('Lara Croft', testValue);
  expect(emp.getId()).toEqual(testValue);
});
  // Email //
test('Gets employee email address', () => {
  const testValue = 'lc@gmail.com';
  const emp = new Employee('Lara Croft', A1C24, testValue);
  expect(emp.getEmail()).toEqual(testValue);
});

// Get role to equal the values ^ //
test('Gets employee role', () => {
  const testValue = 'Employee';
  const emp = new Employee('Lara Croft', A1C24, 'lc@gmail.com');
  expect(emp.getRole()).toEqual(testValue);
});