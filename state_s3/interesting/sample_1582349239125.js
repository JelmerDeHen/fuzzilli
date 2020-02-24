function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7,v8,v9) {
    'use strict'
    for (const v11 in "boolean") {
        let v15 = 0;
        const v16 = "boolean" + 1;
        // v16 = .primitive
        v15 = v16;
        const v18 = [1337,1337];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v19 = (1337).constructor;
        // v19 = .unknown
        const v20 = {set:v19,get:v19};
        // v20 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "set"])
        const v22 = Object.freeze(v18,v11,v20);
        // v22 = .undefined
        const v24 = Object.values(v18);
        // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    }
    return v1;
}
const v25 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,c:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v25 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["c", "getPrototypeOf", "preventExtensions", "has", "setPrototypeOf", "deleteProperty", "set", "construct", "get", "ownKeys", "isExtensible"])
const v27 = new Proxy(v4,v25);
// v27 = .unknown
v27[1] = "valueOf";
}
%NeverOptimizeFunction(main);
main();
