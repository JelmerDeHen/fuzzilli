function main() {
const v2 = Symbol.toStringTag;
// v2 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
const v3 = Symbol[v2];
// v3 = .unknown
const v4 = {getPrototypeOf:v3,get:v3};
// v4 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
const v6 = new Proxy(eval,v4);
// v6 = .unknown
this.__proto__ = v6;
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v14 = v13;
let v16 = undefined;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v26 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor", "construct", "set", "defineProperty", "get", "apply", "deleteProperty", "getPrototypeOf"])
const v28 = new ArrayBuffer(gc,v26);
// v28 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
v28.toString = valueOf;
const v32 = [13.37,13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
with (v32) {
    e = v34;
}
let v35 = v32;
const v38 = new Float64Array(57816);
// v38 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
let v41 = 0;
}
%NeverOptimizeFunction(main);
main();
