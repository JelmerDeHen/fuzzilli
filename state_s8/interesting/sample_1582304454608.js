function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = new Float64Array(6992);
// v5 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
let v7 = DataView;
let v8 = v5;
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v14(v15,v16,v17,v18) {
    'use strict'
    const v21 = Symbol.e;
    // v21 = .unknown
    const v22 = Symbol[v21];
    // v22 = .unknown
    const v23 = {__proto__:v22,get:v22};
    // v23 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v25 = new Proxy(Reflect,v23);
    // v25 = .unknown
    Object.__proto__ = v25;
}
const v27 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:1337,has:v7};
// v27 = .object(ofGroup: Object, withProperties: ["has", "__proto__", "setPrototypeOf"], withMethods: ["call", "preventExtensions", "getPrototypeOf", "isExtensible", "set", "get", "construct", "deleteProperty", "ownKeys"])
const v29 = new Proxy(v13,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
const v30 = new Proxy(v8,Object);
// v30 = .unknown
function v31(v32,v33,v34,v35) {
    'use strict'
    try {
        const v37 = Object.getOwnPropertyDescriptors(v35);
        // v37 = .object()
    } catch(v38) {
    }
}
const v39 = {deleteProperty:v31,set:v31,getPrototypeOf:v31,call:v31,preventExtensions:v31,isExtensible:8,construct:v31,get:v31,d:v31,setPrototypeOf:v31,has:v31};
// v39 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["has", "preventExtensions", "getPrototypeOf", "setPrototypeOf", "call", "d", "get", "construct", "deleteProperty", "set"])
const v41 = new Proxy(v2,v39);
// v41 = .unknown
function v42(v43,v44,v45,v46) {
    'use strict'
}
let v47 = v41;
const v50 = new Proxy(v47,Object);
// v50 = .unknown
const v52 = Boolean.species;
// v52 = .unknown
v50[v52] = v42;
}
%NeverOptimizeFunction(main);
main();
