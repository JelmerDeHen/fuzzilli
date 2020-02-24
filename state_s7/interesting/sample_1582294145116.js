function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v9 = {a:isFinite};
    // v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    const v12 = [1337,v9,1337,1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v13(v14,v15) {
        function v16(v17,v18) {
        }
        function v19(v20,v21,v22) {
        }
        const v25 = new Uint16Array(1000);
        // v25 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "buffer", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["keys", "some", "sort", "includes", "join", "values", "reduceRight", "fill", "indexOf", "subarray", "reduce", "lastIndexOf", "findIndex", "find", "every", "copyWithin", "entries", "slice", "filter", "set", "forEach", "map", "reverse"])
        try {
            const v28 = {get:v16,set:v19};
            // v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
            const v30 = Object.defineProperty(v25,4294967297,v28);
            // v30 = .undefined
        } catch(v31) {
            const v32 = {__proto__:v31,a:v16,...v25,...4294967296,...v31,...v25};
            // v32 = .object(ofGroup: Object, withProperties: ["byteOffset", "constructor", "length", "byteLength", "__proto__", "buffer"], withMethods: ["find", "reduce", "subarray", "fill", "a", "slice", "join", "reverse", "keys", "entries", "reduceRight", "map", "indexOf", "forEach", "sort", "includes", "copyWithin", "filter", "set", "findIndex", "some", "every", "lastIndexOf", "values"])
        }
    }
    const v33 = v12.forEach(v13,"eeeRbEqfAO");
    // v33 = .undefined
}
const v34 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has", "set", "preventExtensions", "get", "getPrototypeOf", "ownKeys", "construct", "isExtensible", "setPrototypeOf", "deleteProperty"])
const v36 = new Proxy(v2,v34);
// v36 = .unknown
const v39 = [1337,1337,1337,1337,1337];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v40(v41,v42,v43,v44) {
    'use strict'
    const v47 = parseInt.e;
    // v47 = .unknown
    const v48 = parseInt[v47];
    // v48 = .unknown
    const v49 = {getPrototypeOf:v48,get:v48};
    // v49 = .object(ofGroup: Object, withProperties: ["get", "getPrototypeOf", "__proto__"])
    const v51 = new Proxy(Reflect,v49);
    // v51 = .unknown
    Object.__proto__ = v51;
}
const v53 = {deleteProperty:v40,set:v40,getPrototypeOf:v40,call:v40,preventExtensions:v40,isExtensible:v40,construct:v40,get:v40,ownKeys:v40,setPrototypeOf:1337,has:v40};
// v53 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["set", "isExtensible", "construct", "call", "deleteProperty", "ownKeys", "has", "get", "preventExtensions", "getPrototypeOf"])
const v55 = new Proxy(v39,v53);
// v55 = .unknown
v55[1] = "MIN_VALUE";
v36[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
