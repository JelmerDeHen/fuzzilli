function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {setPrototypeOf:parseFloat,apply:parseFloat,deleteProperty:parseFloat,getPrototypeOf:parseFloat,get:parseFloat,call:parseFloat,construct:parseFloat,ownKeys:parseFloat,getOwnPropertyDescriptor:parseFloat};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "call", "deleteProperty", "get", "apply", "ownKeys", "getOwnPropertyDescriptor", "construct", "getPrototypeOf"])
v3.__proto__ = v4;
const v5 = new Uint8ClampedArray(v3);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
}
%NeverOptimizeFunction(main);
main();
