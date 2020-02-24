function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7,v8,v9) {
    'use strict'
    for (const v11 in "boolean") {
        const v13 = [1337,1337];
        // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v14 = (1337).constructor;
        // v14 = .unknown
        const v15 = {set:v14,get:v14};
        // v15 = .object(ofGroup: Object, withProperties: ["get", "set", "__proto__"])
        const v17 = Object.seal(v13,v11,v15);
        // v17 = .object()
        const v19 = Object.values(v13);
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    }
    return v1;
}
const v20 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,c:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c", "has", "get", "deleteProperty", "set", "ownKeys", "isExtensible", "construct", "preventExtensions", "getPrototypeOf", "setPrototypeOf"])
const v22 = new Proxy(v4,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
