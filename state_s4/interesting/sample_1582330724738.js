function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v8 = v7[4294967296];
        // v8 = .unknown
        const v10 = {get:v8};
        // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
        const v12 = Object.defineProperty(v7,9007199254740991,v10);
        // v12 = .undefined
        let v15 = 0;
    } catch(v16) {
    }
}
const v17 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:8,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v17 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["call", "ownKeys", "setPrototypeOf", "construct", "preventExtensions", "has", "set", "getPrototypeOf", "get", "deleteProperty"])
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
