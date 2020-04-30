import { HttpResponse } from '../protocols/http'

export const badequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
