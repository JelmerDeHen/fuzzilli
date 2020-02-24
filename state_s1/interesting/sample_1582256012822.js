function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v3 = eval;
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["d", "toString", "b", "__proto__", "e"])
let v11 = 0;
const v12 = new Uint16Array(v2);
// v12 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["every", "findIndex", "reduceRight", "some", "values", "find", "fill", "forEach", "map", "filter", "reduce", "join", "subarray", "includes", "lastIndexOf", "indexOf", "keys", "copyWithin", "sort", "set", "entries", "reverse", "slice"])
let v15 = 0;
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
const v17 = {deleteProperty:eval,call:v3,ownKeys:eval,apply:v3,defineProperty:v3,getOwnPropertyDescriptor:v3,get:v3,has:v3,isExtensible:v3,set:eval,getPrototypeOf:v3,construct:eval};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "get", "construct", "ownKeys", "defineProperty", "isExtensible", "set", "has", "getOwnPropertyDescriptor", "getPrototypeOf", "apply", "call"])
const v19 = new Proxy(v6,v17);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
