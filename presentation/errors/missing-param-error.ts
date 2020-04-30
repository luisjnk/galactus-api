export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missin Param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
