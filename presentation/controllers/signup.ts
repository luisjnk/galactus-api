import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    console.log(httpRequest.body.name)
    if (!httpRequest.body.name) {
      return badequest(new MissingParamError('name'))
    } if (!httpRequest.body.email) {
      return badequest(new MissingParamError('email'))
    }
  }
}
