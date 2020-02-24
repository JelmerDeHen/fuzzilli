function main() {
const v3 = new Int32Array(10000);
// v3 = .object(ofGroup: Int32Array, withProperties: ["buffer", "length", "__proto__", "constructor", "byteLength", "byteOffset"], withMethods: ["forEach", "entries", "find", "reduce", "lastIndexOf", "indexOf", "map", "slice", "findIndex", "set", "keys", "subarray", "join", "filter", "some", "values", "fill", "copyWithin", "reverse", "sort", "includes", "every", "reduceRight"])
const v6 = v3.slice(-268435456,1337);
// v6 = .object(ofGroup: Int32Array, withProperties: ["buffer", "__proto__", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["map", "subarray", "lastIndexOf", "every", "forEach", "indexOf", "find", "filter", "copyWithin", "includes", "keys", "reduce", "entries", "fill", "values", "findIndex", "some", "join", "reduceRight", "slice", "set", "sort", "reverse"])
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = [v8,2485132437,v8,2485132437];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
// v26 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "call", "getPrototypeOf", "defineProperty", "getOwnPropertyDescriptor"])
const v28 = new Proxy(v9,v26);
// v28 = .unknown
v28[Proxy] = v6;
}
%NeverOptimizeFunction(main);
main();
