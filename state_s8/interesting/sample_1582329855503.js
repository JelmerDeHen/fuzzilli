function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [gc];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {a:v7,constructor:1024};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "constructor"])
const v9 = {toString:v4,d:"number",e:"number"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "toString"])
let v12 = 0;
do {
    const v15 = new Uint16Array(37792);
    // v15 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "constructor", "byteOffset", "buffer", "byteLength", "length"], withMethods: ["fill", "reverse", "keys", "forEach", "set", "indexOf", "subarray", "lastIndexOf", "sort", "reduce", "findIndex", "map", "every", "entries", "join", "find", "some", "slice", "values", "includes", "filter", "reduceRight", "copyWithin"])
    const v16 = v12 + 1;
    // v16 = .primitive
    v12 = v16;
} while (v12 < 3);
let v17 = gc;
const v24 = [1337,1337,1337,1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
for (const v25 in v9) {
    const v26 = v17();
    // v26 = .undefined
}
function v27(v28,v29,v30,v31) {
    'use strict'
    try {
        const v34 = Object.defineProperty(this,1337,v31);
        // v34 = .undefined
    } catch(v35) {
    }
    return v27;
}
const v36 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
// v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "getPrototypeOf", "construct", "preventExtensions", "call", "ownKeys", "isExtensible", "get", "set", "setPrototypeOf", "deleteProperty"])
const v38 = new Proxy(v24,v36);
// v38 = .unknown
v38[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
