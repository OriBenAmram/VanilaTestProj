const cloneArray = require('./cloneArray')

test('proparly clones array', () => { 
    const array = [1, 2, 3]
    // expect(cloneArray(array)).toBe(array)
    expect(cloneArray(array)).not.toBe(array)
    expect(cloneArray(array)).toEqual(array)
})