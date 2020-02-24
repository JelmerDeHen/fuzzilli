function main() {
const v2 = [-4294967295,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = ["boolean",-199391297];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v7 = v6;
const v9 = (1337)[-2147483647];
// v9 = .unknown
const v11 = new Float64Array(v7);
// v11 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
const v12 = v11 == 1337;
// v12 = .boolean
const v13 = (-3895504392)[Float64Array];
// v13 = .unknown
const v15 = {setPrototypeOf:v9,has:v13,isExtensible:v13,ownKeys:v13,defineProperty:v9,getOwnPropertyDescriptor:v9};
// v15 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "__proto__", "defineProperty", "ownKeys", "isExtensible", "has", "getOwnPropertyDescriptor"])
const v17 = new Proxy(v11,v15);
// v17 = .unknown
const v19 = Symbol.toStringTag;
// v19 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v20 = v2[v19];
// v20 = .unknown
const v22 = Symbol.split;
// v22 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
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
