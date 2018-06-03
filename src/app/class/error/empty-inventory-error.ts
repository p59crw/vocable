export class EmptyInventoryError extends Error {

  constructor() {
    super('Your inventory is empty. Select sounds, then submit again.');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, EmptyInventoryError.prototype);
  }

}
