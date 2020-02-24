function main() {
const v5 = [13.37];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [1337,1337,1337,"xcycrfnQjT",1337];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "construct", "get", "ownKeys", "setPrototypeOf", "call", "has", "deleteProperty", "getPrototypeOf", "isExtensible"])
const v19 = new Proxy(v7,v17);
// v19 = .unknown
v19.constructor = v5;
}
%NeverOptimizeFunction(main);
main();
