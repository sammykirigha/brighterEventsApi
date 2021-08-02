import EncryptData from './encrypt.js';

describe('EncryData', () => {
    test('it should encrypt a string and return a hash', () => {
        const originalString = 'myPassword';
        const hashedString = EncryptData.generateHash(originalString);
        expect(originalString).not.toEqual(String(hashedString));
    });

    test('it should return true if the hash matchs the original string', async () => {
        const originalString = 'myPassword';
        const hashedString = EncryptData.generateHash(originalString);
        const isMatch = await EncryptData.compareHash(originalString, hashedString);
        expect(isMatch).toBeTruthy();
    })

    test('it should return false if a hash does not match the original string', async () => {
        const hashedString = EncryptData.generateHash('myPassword');
        const isMatch = await EncryptData.compareHash(
            'someRandomString',
            hashedString
        )
        expect(isMatch).toBeFalsy();
    })
})