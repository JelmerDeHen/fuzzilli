function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v8 = v7[4294967296];
        // v8 = .unknown
        const v10 = {get:v8};
        // v10 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
        const v12 = Object.defineProperty(v7,9007199254740991,v10);
        // v12 = .undefined
        let v15 = 0;
    } catch(v16) {
    }
}
const v17 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:8,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v17 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["set", "setPrototypeOf", "call", "construct", "get", "ownKeys", "deleteProperty", "has", "getPrototypeOf", "preventExtensions"])
const v19 = new Proxy(v2,v17);
// v19 = .unknown
function v20(v21,v22,v23,v24) {
    'use strict'
}
let v25 = v19;
const v28 = new Proxy(v25,Object);
// v28 = .unknown
const v30 = Symbol.species;
// v30 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v28[v30] = v20;
}
%NeverOptimizeFunction(main);
main();
