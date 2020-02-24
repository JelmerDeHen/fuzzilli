function main() {
const v2 = [-4294967295,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = ["boolean",-199391297];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v7 = v6;
const v9 = (1337)[-2147483647];
// v9 = .unknown
const v11 = new Float64Array(v7);
// v11 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
const v12 = v11 == 1337;
// v12 = .boolean
const v13 = (-3895504392)[Float64Array];
// v13 = .unknown
const v15 = {setPrototypeOf:v9,has:v13,isExtensible:v13,ownKeys:v13,defineProperty:v9,getOwnPropertyDescriptor:v9};
// v15 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "setPrototypeOf", "isExtensible", "ownKeys", "__proto__", "has", "defineProperty"])
const v17 = new Proxy(v11,v15);
// v17 = .unknown
const v19 = Symbol.toStringTag;
// v19 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v20 = v2[v19];
// v20 = .unknown
const v22 = Symbol.split;
// v22 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v17[v22] = 1958;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
let v29 = 0;
const v30 = v29 + 1;
// v30 = .primitive
v29 = v30;
}
%NeverOptimizeFunction(main);
main();
