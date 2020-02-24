function main() {
const v1 = [13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v27 = .object(ofGroup: Object, withProperties: ["ownKeys", "__proto__"], withMethods: ["get", "construct", "setPrototypeOf", "has", "getPrototypeOf", "set", "deleteProperty", "preventExtensions", "isExtensible", "call"])
const v29 = new Proxy(v19,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
