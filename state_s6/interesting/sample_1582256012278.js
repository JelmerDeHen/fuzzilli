function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v3 = eval;
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["d", "toString", "__proto__", "b", "e"])
let v11 = 0;
const v12 = new Uint16Array(v2);
// v12 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
let v15 = 0;
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
const v17 = {deleteProperty:eval,call:v3,ownKeys:eval,apply:v3,defineProperty:v3,getOwnPropertyDescriptor:v3,get:v3,has:v3,isExtensible:v3,set:eval,getPrototypeOf:v3,construct:eval};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "getOwnPropertyDescriptor", "deleteProperty", "apply", "ownKeys", "set", "isExtensible", "get", "defineProperty", "getPrototypeOf", "has", "construct"])
const v19 = new Proxy(v6,v17);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
