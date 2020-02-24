function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v3 = eval;
const v6 = [13.37,13.37,13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "b", "d", "e", "__proto__"])
let v11 = 0;
const v12 = new Uint16Array(v2);
// v12 = .object(ofGroup: Uint16Array, withProperties: ["length", "byteLength", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["fill", "findIndex", "filter", "entries", "map", "find", "sort", "every", "reduce", "join", "set", "copyWithin", "subarray", "reverse", "some", "indexOf", "includes", "reduceRight", "lastIndexOf", "values", "slice", "keys", "forEach"])
let v15 = 0;
const v16 = v11 + 1;
// v16 = .primitive
v11 = v16;
const v17 = {deleteProperty:eval,call:v3,ownKeys:eval,apply:v3,defineProperty:v3,getOwnPropertyDescriptor:v3,get:v3,has:v3,isExtensible:v3,set:eval,getPrototypeOf:v3,construct:eval};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "set", "get", "deleteProperty", "isExtensible", "has", "construct", "getPrototypeOf", "defineProperty", "apply", "call", "ownKeys"])
const v19 = new Proxy(v6,v17);
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
