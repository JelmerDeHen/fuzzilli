function main() {
const v3 = new Int32Array(10000);
// v3 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteLength", "constructor", "__proto__", "length", "byteOffset"], withMethods: ["filter", "copyWithin", "every", "set", "fill", "slice", "subarray", "join", "some", "includes", "reverse", "sort", "keys", "forEach", "indexOf", "entries", "find", "map", "reduce", "reduceRight", "lastIndexOf", "values", "findIndex"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = [v8,2485132437,v8,2485132437];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "getOwnPropertyDescriptor", "set", "getPrototypeOf", "call"])
const v28 = new Proxy(v9,v26);
// v28 = .unknown
v28[Proxy] = v6;
}
%NeverOptimizeFunction(main);
main();
