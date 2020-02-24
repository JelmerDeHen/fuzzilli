function main() {
const v3 = new Int32Array(10000);
// v3 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "byteOffset", "buffer", "byteLength", "constructor", "length"], withMethods: ["some", "values", "find", "subarray", "slice", "indexOf", "entries", "filter", "join", "forEach", "findIndex", "every", "keys", "sort", "includes", "set", "lastIndexOf", "reduce", "fill", "reduceRight", "copyWithin", "map", "reverse"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v9 = [v8,2485132437,v8,2485132437];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "getOwnPropertyDescriptor", "getPrototypeOf", "defineProperty", "call"])
const v28 = new Proxy(v9,v26);
// v28 = .unknown
v28[Proxy] = v6;
}
%NeverOptimizeFunction(main);
main();
