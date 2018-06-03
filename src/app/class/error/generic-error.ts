export class GenericError extends Error {

  constructor(message: string) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, GenericError.prototype);
  }

  toString() {
    return this.message + '\nPlease try refreshing the page.'
      + ' If the problem persists, please contact the administrator.';
  }
}
