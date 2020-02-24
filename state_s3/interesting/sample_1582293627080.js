function main() {
const v2 = [-4294967295,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = ["boolean",-199391297];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v7 = v6;
const v9 = (1337)[-2147483647];
// v9 = .unknown
const v11 = new Float64Array(v7);
// v11 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
const v12 = v11 == 1337;
// v12 = .boolean
const v13 = (-3895504392)[Float64Array];
// v13 = .unknown
const v15 = {setPrototypeOf:v9,has:v13,isExtensible:v13,ownKeys:v13,defineProperty:v9,getOwnPropertyDescriptor:v9};
// v15 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "ownKeys", "__proto__", "isExtensible", "defineProperty", "has", "setPrototypeOf"])
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
