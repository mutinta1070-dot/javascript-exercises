const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Mutinta', () => {
    expect(values.firstName).toEqual('Mutinta');
  });
  test('lastName is katalilo', () => {
    expect(values.lastName).toEqual('Katalilo');
  });
  test('thisYear is 2023', () => {
    expect(values.thisYear).toEqual(2023);
  });
  test('birthYear is 2003', () => {
    expect(values.birthYear).toEqual(2003);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My name is Mutinta Katalilo and I am 20 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Mutinta Katalilo', () => {
    expect(values.fullName).toEqual('Mutinta Katalilo');
  });
  test('age is 20', () => {
    expect(values.age).toEqual(20);
  });
});
