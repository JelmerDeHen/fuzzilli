function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {setPrototypeOf:parseFloat,apply:parseFloat,deleteProperty:parseFloat,getPrototypeOf:parseFloat,get:parseFloat,call:parseFloat,construct:parseFloat,ownKeys:parseFloat,getOwnPropertyDescriptor:parseFloat};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "setPrototypeOf", "deleteProperty", "getPrototypeOf", "ownKeys", "getOwnPropertyDescriptor", "construct", "get", "call"])
v3.__proto__ = v4;
const v5 = new Uint8ClampedArray(v3);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
}
%NeverOptimizeFunction(main);
main();
