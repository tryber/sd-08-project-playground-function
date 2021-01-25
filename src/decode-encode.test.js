const encode = requires('./encode');
const decode = requires('./decode');

describe('encode and decode are functions', () => {
    test('decode is a function', () => {
        expect(typeof encode).toBe('function');
    });
});