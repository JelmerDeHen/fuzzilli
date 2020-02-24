function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        v9[3] = v9;
    } catch(v10) {
        for (const v12 in "boolean") {
            const v14 = [1337,1337];
            // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            const v15 = (1337).constructor;
            // v15 = .unknown
            const v16 = {set:v15,get:v15};
            // v16 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "set"])
            const v18 = Object.defineProperty(v14,v12,v16);
            // v18 = .undefined
            const v20 = Object.values(v14);
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        }
    }
    return v1;
}
const v21 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,c:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c", "ownKeys", "has", "set", "get", "construct", "getPrototypeOf", "isExtensible", "setPrototypeOf", "deleteProperty", "preventExtensions"])
const v23 = new Proxy(v4,v21);
// v23 = .unknown
v23[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
