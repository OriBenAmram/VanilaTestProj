const sum = require('./sum')

test('Proparly summing two values', () => { 
    expect(sum(1, 2)).toBe(3)
})