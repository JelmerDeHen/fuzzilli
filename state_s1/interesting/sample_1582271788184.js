function main() {
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "set", "deleteProperty", "isExtensible", "get", "ownKeys", "getPrototypeOf", "has", "setPrototypeOf", "call", "preventExtensions"])
const v17 = new Proxy(v4,v15);
// v17 = .unknown
v17[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
