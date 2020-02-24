function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        const v8 = v7[4294967296];
        // v8 = .unknown
        const v10 = {get:v8};
        // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
        const v12 = Object.defineProperty(v7,9007199254740991,v10);
        // v12 = .undefined
    } catch(v13) {
    }
}
const v14 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:8,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "isExtensible"], withMethods: ["getPrototypeOf", "preventExtensions", "ownKeys", "deleteProperty", "construct", "has", "get", "setPrototypeOf", "call", "set"])
const v16 = new Proxy(v2,v14);
// v16 = .unknown
function v17(v18,v19,v20,v21) {
    'use strict'
}
let v22 = v16;
let v27 = 1;
while (v27 < 1337) {
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
}
const v29 = new Proxy(v22,Object);
// v29 = .unknown
const v31 = Symbol.species;
// v31 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
v29[v31] = v17;
const v32 = v22[9007199254740991];
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
