export interface HttpRequest {
  body: HttpRequestBody
}

export interface HttpResponse {
  statusCode: number
  body?: any
}

interface HttpRequestBody {
  name?: string
  email? : string
  password? : string
  passwordConfirmation?: string
}
