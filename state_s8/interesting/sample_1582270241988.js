function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {setPrototypeOf:parseFloat,apply:parseFloat,deleteProperty:parseFloat,getPrototypeOf:parseFloat,get:parseFloat,call:parseFloat,construct:parseFloat,ownKeys:parseFloat,getOwnPropertyDescriptor:parseFloat};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "ownKeys", "get", "construct", "deleteProperty", "getPrototypeOf", "apply", "call", "getOwnPropertyDescriptor"])
v3.__proto__ = v4;
const v5 = new Uint8ClampedArray(v3);
// v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
}
%NeverOptimizeFunction(main);
main();
