function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v3 = eval;
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "toString", "e", "d"])
let v11 = 0;
const v12 = new Uint16Array(v2);
// v12 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
let v15 = 0;
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
const v17 = {deleteProperty:eval,call:v3,ownKeys:eval,apply:v3,defineProperty:v3,getOwnPropertyDescriptor:v3,get:v3,has:v3,isExtensible:v3,set:eval,getPrototypeOf:v3,construct:eval};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "getOwnPropertyDescriptor", "deleteProperty", "getPrototypeOf", "ownKeys", "construct", "defineProperty", "get", "apply", "has", "call", "set"])
const v19 = new Proxy(v6,v17);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
