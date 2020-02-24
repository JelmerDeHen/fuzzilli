function main() {
const v3 = new Int32Array(10000);
// v3 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "byteLength", "__proto__", "byteOffset", "constructor"], withMethods: ["indexOf", "some", "lastIndexOf", "reduceRight", "findIndex", "copyWithin", "forEach", "set", "fill", "filter", "join", "values", "reverse", "map", "subarray", "keys", "slice", "includes", "find", "entries", "sort", "every", "reduce"])
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "byteOffset", "length", "byteLength", "__proto__"], withMethods: ["keys", "entries", "find", "fill", "filter", "set", "forEach", "map", "some", "subarray", "findIndex", "reduceRight", "values", "sort", "includes", "copyWithin", "indexOf", "every", "reduce", "reverse", "slice", "join", "lastIndexOf"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v9 = [v8,2485132437,v8,2485132437];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["defineProperty", "set", "getOwnPropertyDescriptor", "getPrototypeOf", "call"])
const v28 = new Proxy(v9,v26);
// v28 = .unknown
v28[Proxy] = v6;
}
%NeverOptimizeFunction(main);
main();
