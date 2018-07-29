export class NotYetImplementedError extends Error {

  constructor(message: string) {
    super("The function, " + message + ", has not yet been implemented.");

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NotYetImplementedError.prototype);
  }

}
