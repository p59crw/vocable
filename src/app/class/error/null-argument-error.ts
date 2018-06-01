export class NullArgumentError extends Error {

  constructor(message: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NullArgumentError.prototype);
  }

  toString() {
    return 'NullArgumentException: ' + this.message + 'is null.';
  }
}
