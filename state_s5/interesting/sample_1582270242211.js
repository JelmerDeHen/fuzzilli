function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {setPrototypeOf:parseFloat,apply:parseFloat,deleteProperty:parseFloat,getPrototypeOf:parseFloat,get:parseFloat,call:parseFloat,construct:parseFloat,ownKeys:parseFloat,getOwnPropertyDescriptor:parseFloat};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "get", "getPrototypeOf", "setPrototypeOf", "construct", "ownKeys", "getOwnPropertyDescriptor", "apply", "deleteProperty"])
v3.__proto__ = v4;
const v5 = new Uint8ClampedArray(v3);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
}
%NeverOptimizeFunction(main);
main();
