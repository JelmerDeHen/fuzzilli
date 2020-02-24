function main() {
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8,v9,v10) {
    'use strict'
    for (const v12 in "boolean") {
        const v14 = [v7,1337];
        // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v15 = v14.shift();
        // v15 = .unknown
        const v16 = (1337).constructor;
        // v16 = .unknown
        const v17 = {set:v16,a:v16};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "set"])
        const v19 = Object.seal(v14,v12,v17);
        // v19 = .object()
        const v21 = Object.values(v14);
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    }
}
const v22 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,c:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "get", "getPrototypeOf", "setPrototypeOf", "deleteProperty", "set", "isExtensible", "construct", "has", "ownKeys", "c"])
const v24 = new Proxy(v5,v22);
// v24 = .unknown
v24[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
