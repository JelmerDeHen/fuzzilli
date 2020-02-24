function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        const v11 = [13.37,13.37,13.37,13.37,13.37];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v13 = [1337,v11,13.37,6];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        this[1337] = "MIN_VALUE";
        const v17 = Object.freeze(this,"d",v13);
        // v17 = .undefined
        const v21 = {get:Number,set:Number};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
        const v23 = Object.defineProperty(this,1337,v21);
        // v23 = .undefined
    } catch(v24) {
    }
}
const v25 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "getPrototypeOf", "ownKeys", "has", "set", "deleteProperty", "setPrototypeOf", "call", "get", "construct", "preventExtensions"])
const v27 = new Proxy(v3,v25);
// v27 = .unknown
v27[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
