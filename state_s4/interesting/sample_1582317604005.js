function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        this[v7] = v1;
        const v12 = Object.defineProperty(this,1337,v9);
        // v12 = .undefined
    } catch(v13) {
    }
    return v5;
}
const v14 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get", "getPrototypeOf", "setPrototypeOf", "preventExtensions", "call", "deleteProperty", "isExtensible", "has", "construct", "ownKeys"])
const v16 = new Proxy(v4,v14);
// v16 = .unknown
v16.constructor = v1;
}
%NeverOptimizeFunction(main);
main();
