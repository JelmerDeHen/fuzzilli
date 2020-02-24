function main() {
function v1(v2,v3) {
    const v6 = new Int16Array(19873);
    // v6 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
    const v8 = [482330.0655705447,482330.0655705447];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v11 = [1337,1337,1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
        } catch(v17) {
        }
        return v8;
    }
    const v18 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "isExtensible", "get", "getPrototypeOf", "set", "deleteProperty", "preventExtensions", "ownKeys", "setPrototypeOf", "construct", "has"])
    const v20 = new Proxy(v11,v18);
    // v20 = .unknown
    v20[1] = "MIN_VALUE";
    v20.constructor = "MIN_VALUE";
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v23 = v22;
const v24 = v1(v23);
// v24 = .unknown
const v25 = v1(v24,-0.0);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
