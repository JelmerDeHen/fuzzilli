function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v4 = 0;
let v7 = 0;
const v8 = v4 + 1;
// v8 = .primitive
v4 = v8;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v19 = [1337,1337,1337,1337,1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
        const v25 = Symbol(v23);
        // v25 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    } catch(v26) {
    }
    return v22;
}
const v27 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v1,setPrototypeOf:v20,has:v20};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["deleteProperty", "set", "getPrototypeOf", "get", "has", "construct", "call", "isExtensible", "setPrototypeOf", "preventExtensions"])
const v29 = new Proxy(v19,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();