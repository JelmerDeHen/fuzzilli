function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = new Float64Array(6992);
// v5 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
let v7 = DataView;
let v8 = v5;
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
// v27 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "has", "__proto__"], withMethods: ["isExtensible", "set", "preventExtensions", "get", "ownKeys", "deleteProperty", "construct", "getPrototypeOf", "call"])
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
// v39 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["preventExtensions", "construct", "call", "has", "get", "d", "set", "deleteProperty", "getPrototypeOf", "setPrototypeOf"])
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
