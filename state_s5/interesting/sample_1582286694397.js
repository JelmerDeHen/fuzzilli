function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "get", "__proto__"])
const v6 = new Proxy(eval,v4);
// v6 = .unknown
this.__proto__ = v6;
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v14 = v13;
let v16 = undefined;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v26 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "isExtensible", "apply", "set", "getPrototypeOf", "deleteProperty", "get", "getOwnPropertyDescriptor", "preventExtensions", "ownKeys", "construct"])
const v28 = new ArrayBuffer(gc,v26);
// v28 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
v28.toString = valueOf;
const v32 = [13.37,13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
with (v32) {
    e = v34;
}
let v35 = v32;
const v38 = new Float64Array(57816);
// v38 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
let v41 = 0;
}
%NeverOptimizeFunction(main);
main();
