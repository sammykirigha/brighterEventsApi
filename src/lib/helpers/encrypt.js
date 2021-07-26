import bcrypt from 'bcrypt';

class EncryptedData {
    static generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    }

    static compareHash(inputPassword, hashedPassword) {
        return bcrypt.compare(inputPassword, hashedPassword)
    }
}

export default EncryptedData;