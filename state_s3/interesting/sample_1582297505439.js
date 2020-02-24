function main() {
let v5 = 0;
do {
    let v7 = 13.37;
    const v9 = Number.isInteger(v7);
    // v9 = .boolean
    const v12 = eval(1337);
    // v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    const v13 = v5 + 1;
    // v13 = .primitive
    v5 = v13;
} while (v5 < 8);
const v16 = new Float64Array(16);
// v16 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["filter", "set", "every", "join", "copyWithin", "reverse", "slice", "keys", "fill", "sort", "indexOf", "some", "subarray", "reduce", "reduceRight", "map", "values", "includes", "forEach", "lastIndexOf", "entries", "findIndex", "find"])
let v18 = DataView;
let v19 = v16;
const v24 = [1337,1337,1337,1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v25(v26,v27,v28,v29) {
    'use strict'
    const v32 = Symbol.e;
    // v32 = .unknown
    const v33 = Symbol[v32];
    // v33 = .unknown
    const v34 = {__proto__:v33,get:v33};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v36 = new Proxy(Reflect,v34);
    // v36 = .unknown
    Object.__proto__ = v36;
}
const v38 = {deleteProperty:v25,set:v25,getPrototypeOf:v25,call:v25,preventExtensions:v25,isExtensible:v25,construct:v25,get:v25,ownKeys:v25,setPrototypeOf:1337,has:v18};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__", "has", "setPrototypeOf"], withMethods: ["getPrototypeOf", "ownKeys", "preventExtensions", "isExtensible", "deleteProperty", "get", "construct", "call", "set"])
const v40 = new Proxy(v24,v38);
// v40 = .unknown
v40[1] = "MIN_VALUE";
const v41 = new Proxy(v19,Object);
// v41 = .unknown
for (const v42 in v41) {
}
}
%NeverOptimizeFunction(main);
main();
