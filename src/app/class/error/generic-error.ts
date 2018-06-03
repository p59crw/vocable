export class GenericError extends Error {

  constructor(message: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GenericError.prototype);
  }

}
