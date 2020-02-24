function main() {
function v1(v2,v3) {
    const v6 = new Int16Array(19873);
    // v6 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    const v8 = [482330.0655705447,482330.0655705447];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v11 = [1337,1337,1337,1337,1337];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v12(v13,v14,v15,v16) {
        'use strict'
        try {
            v16[3] = v16;
        } catch(v17) {
        }
        return v8;
    }
    const v18 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "get", "getPrototypeOf", "preventExtensions", "has", "setPrototypeOf", "set", "ownKeys", "isExtensible", "deleteProperty", "construct"])
    const v20 = new Proxy(v11,v18);
    // v20 = .unknown
    v20[1] = "MIN_VALUE";
    v20.constructor = "MIN_VALUE";
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v1(v23);
// v24 = .unknown
const v25 = v1(v24,-0.0);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
