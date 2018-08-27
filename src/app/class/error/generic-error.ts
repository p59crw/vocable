export class GenericError extends Error {

  constructor(title: string, message: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GenericError.prototype);
  }

}
