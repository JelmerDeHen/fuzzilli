function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v12 = 0;
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        const v20 = Object.getOwnPropertyDescriptors(v18);
        // v20 = .object()
    } catch(v21) {
    }
}
const v22 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:8,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v22 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__"], withMethods: ["preventExtensions", "construct", "has", "deleteProperty", "get", "setPrototypeOf", "ownKeys", "set", "call", "getPrototypeOf"])
const v24 = new Proxy(v13,v22);
// v24 = .unknown
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
function v29(v30,v31,v32,v33) {
    'use strict'
    const v36 = parseInt.e;
    // v36 = .unknown
    const v37 = parseInt[v36];
    // v37 = .unknown
    const v38 = {getPrototypeOf:v37,get:v37};
    // v38 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "getPrototypeOf"])
    const v40 = new Proxy(Reflect,v38);
    // v40 = .unknown
    Object.__proto__ = v40;
}
const v42 = {deleteProperty:v29,set:v29,getPrototypeOf:v29,call:v29,preventExtensions:v29,isExtensible:v29,construct:v29,get:v29,ownKeys:v29,setPrototypeOf:1337,has:v29};
// v42 = .object(ofGroup: Object, withProperties: ["__proto__", "setPrototypeOf"], withMethods: ["construct", "call", "isExtensible", "set", "getPrototypeOf", "has", "preventExtensions", "deleteProperty", "ownKeys", "get"])
const v44 = new Proxy(v2,v42);
// v44 = .unknown
v44[1] = "MIN_VALUE";
let v45 = v24;
const v48 = new Proxy(v45,Object);
// v48 = .unknown
const v50 = Symbol.species;
// v50 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
v48[v50] = v29;
}
%NeverOptimizeFunction(main);
main();
