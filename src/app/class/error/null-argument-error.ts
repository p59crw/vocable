export class NullArgumentError extends Error {

  constructor(message: string) {
    super(message + ' is null.');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NullArgumentError.prototype);
  }

}
