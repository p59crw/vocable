interface Array<T> {
    /**
     * Returns a copy of the array with shallow copies of non-primitive types.
     */
    shallowCopy(): any[];
    /**
     * Returns a copy of the array with deep copies of non-primitive types.
     * Note: Deep copies of objects will lose their class type, so the class will be 
     * need to be reconstructed if you want to call any class-defined functions.
     */
    deepCopy(): any[];
}

Array.prototype.shallowCopy = function () : any[] {
    return Object.assign([], this);
};

Array.prototype.deepCopy = function () : any[] {
    return JSON.parse(JSON.stringify(this));
};