function main() {
const v3 = new Int32Array(10000);
// v3 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["set", "values", "filter", "reverse", "findIndex", "join", "find", "copyWithin", "sort", "includes", "indexOf", "forEach", "every", "subarray", "reduce", "some", "lastIndexOf", "fill", "keys", "slice", "map", "reduceRight", "entries"])
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "byteLength", "buffer"], withMethods: ["slice", "findIndex", "sort", "keys", "entries", "map", "set", "copyWithin", "some", "indexOf", "subarray", "every", "reverse", "join", "lastIndexOf", "values", "forEach", "filter", "fill", "includes", "reduce", "find", "reduceRight"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = [v8,2485132437,v8,2485132437];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v17 = Object.defineProperties(this,v14,v14);
        // v17 = .undefined
        let v20 = 0;
    } catch(v21) {
    }
}
const v26 = {getOwnPropertyDescriptor:v10,set:v10,call:v10,getPrototypeOf:v10,defineProperty:v10};
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "defineProperty", "getPrototypeOf", "call", "set"])
const v28 = new Proxy(v9,v26);
// v28 = .unknown
v28[Proxy] = v6;
}
%NeverOptimizeFunction(main);
main();
