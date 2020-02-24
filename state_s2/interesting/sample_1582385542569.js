function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    for (const v9 in "prototype") {
        const v11 = [v4,1337];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v12 = v11.shift();
        // v12 = .unknown
        const v13 = (1337).constructor;
        // v13 = .unknown
        const v14 = {set:v13,a:v13};
        // v14 = .object(ofGroup: Object, withProperties: ["set", "__proto__", "a"])
        const v16 = Object.seal(v11,v9,v14);
        // v16 = .object()
        const v18 = Object.entries(v11);
        // v18 = .object()
    }
}
const v19 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,c:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "get", "set", "isExtensible", "preventExtensions", "has", "c", "ownKeys", "construct", "deleteProperty", "getPrototypeOf"])
const v21 = new Proxy(v2,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
