import crypto from 'crypto'
import { credentialsAreValid, hashPassword } from '../src/utils/utils';


describe('hashPassword', () => {

  test('hashing password', () => {
      const clearPassword = "eatmyass";
      const hash = crypto.createHash("sha256")
      hash.update(clearPassword)
      const expectedHash = hash.digest('hex')
      const actualHash =  hashPassword(clearPassword)
      expect(actualHash).toBe(expectedHash)
  })

})