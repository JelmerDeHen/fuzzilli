function main() {
const v2 = [1337,Int16Array];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337,1337,"MIN_VALUE",1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = {apply:v6,ownKeys:v10,isExtensible:v6,defineProperty:v6};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys"], withMethods: ["apply", "isExtensible", "defineProperty"])
        const v13 = new Proxy(v2,v11);
        // v13 = .unknown
        v13[1337] = v8;
    } catch(v14) {
    }
}
const v15 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "preventExtensions", "set", "construct", "isExtensible", "setPrototypeOf", "ownKeys", "get", "has", "getPrototypeOf", "deleteProperty"])
const v17 = new Proxy(v5,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
