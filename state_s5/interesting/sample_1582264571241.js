function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v20(v21,v22,v23,v24) {
    'use strict'
    try {
        v24[3] = v24;
        const v25 = Symbol(v23);
        // v25 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    } catch(v26) {
    }
    return v22;
}
const v27 = {deleteProperty:v20,set:v20,getPrototypeOf:v20,call:v20,preventExtensions:v20,isExtensible:v20,construct:v20,get:v20,ownKeys:v1,setPrototypeOf:v20,has:v20};
// v27 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["get", "preventExtensions", "construct", "isExtensible", "deleteProperty", "setPrototypeOf", "getPrototypeOf", "call", "has", "set"])
const v29 = new Proxy(v19,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
