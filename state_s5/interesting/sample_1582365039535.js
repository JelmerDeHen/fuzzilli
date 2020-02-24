function main() {
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337,1337,1337,"xcycrfnQjT",1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v8(v9,v10,v11,v12) {
    'use strict'
    try {
        const v15 = Object.defineProperty(this,v12,v12);
        // v15 = .undefined
    } catch(v16) {
    }
    return Symbol;
}
const v17 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "has", "isExtensible", "getPrototypeOf", "call", "get", "setPrototypeOf", "set", "preventExtensions", "ownKeys", "construct"])
const v19 = new Proxy(v7,v17);
// v19 = .unknown
v19.constructor = v5;
}
%NeverOptimizeFunction(main);
main();
