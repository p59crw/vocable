export class EmptyInputError extends Error {

  constructor(message: string) {
    super(message + ' is empty. Add input, then submit again.');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, EmptyInputError.prototype);
  }

}
