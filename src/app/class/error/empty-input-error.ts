export class EmptyInputError extends Error {

  constructor(message: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, EmptyInputError.prototype);
  }

  toString() {
    return this.message + ' is empty. Add input, then try again.';
  }
}
