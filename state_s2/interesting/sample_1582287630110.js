function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        v9[3] = v9;
    } catch(v10) {
        for (const v12 in "boolean") {
            const v14 = [1337,1337];
            // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v15 = (1337).constructor;
            // v15 = .unknown
            const v16 = {set:v15,get:v15};
            // v16 = .object(ofGroup: Object, withProperties: ["__proto__", "get", "set"])
            const v18 = Object.defineProperty(v14,v12,v16);
            // v18 = .undefined
            const v20 = Object.entries(v14);
            // v20 = .object()
        }
    }
    return v1;
}
const v21 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "has", "preventExtensions", "call", "set", "ownKeys", "deleteProperty", "get", "getPrototypeOf", "construct", "setPrototypeOf"])
const v23 = new Proxy(v4,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
