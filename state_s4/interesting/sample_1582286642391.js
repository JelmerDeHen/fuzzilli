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
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v14 = v13;
let v16 = undefined;
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
const v26 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "apply", "set", "get", "getPrototypeOf", "getOwnPropertyDescriptor", "construct", "preventExtensions", "ownKeys", "defineProperty", "deleteProperty"])
const v28 = new ArrayBuffer(gc,v26);
// v28 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
v28.toString = valueOf;
const v32 = [13.37,13.37,13.37,13.37,13.37];
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
with (v32) {
    e = v34;
}
let v35 = v32;
const v38 = new Float64Array(57816);
// v38 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
let v41 = 0;
}
%NeverOptimizeFunction(main);
main();
