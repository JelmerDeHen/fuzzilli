function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = eval;
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "b", "e", "toString"])
let v11 = 0;
const v12 = new Uint16Array(v2);
// v12 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
let v15 = 0;
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
const v17 = {deleteProperty:eval,call:v3,ownKeys:eval,apply:v3,defineProperty:v3,getOwnPropertyDescriptor:v3,get:v3,has:v3,isExtensible:v3,set:eval,getPrototypeOf:v3,construct:eval};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "call", "getPrototypeOf", "has", "apply", "ownKeys", "get", "defineProperty", "set", "deleteProperty", "isExtensible", "getOwnPropertyDescriptor"])
const v19 = new Proxy(v6,v17);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
