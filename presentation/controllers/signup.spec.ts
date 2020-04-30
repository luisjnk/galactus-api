import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if o name is provided', () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@aaa.com',
        password: '12345',
        passwordConfirmation: '12345'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})