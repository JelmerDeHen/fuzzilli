function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        v9[3] = v9;
        const v10 = v7();
        // v10 = .unknown
        const v11 = v10[-2900725722];
        // v11 = .unknown
    } catch(v13) {
        const v14 = RegExp(v13);
        // v14 = .object()
    }
}
const v15 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has", "isExtensible", "getPrototypeOf", "deleteProperty", "ownKeys", "construct", "get", "setPrototypeOf", "preventExtensions", "set"])
const v17 = new Proxy(v4,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
