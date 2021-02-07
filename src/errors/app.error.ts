

export class ApiError extends Error {

  public code: number

  constructor(message, code) {
    super(message)
    this.code = code
  }
}