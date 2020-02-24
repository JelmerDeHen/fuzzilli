function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = [13.37,13.37,13.37,v7];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v11 = new Set(v10);
    // v11 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["forEach", "delete", "clear", "entries", "values", "keys", "has", "add"])
}
const v12 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "call", "getPrototypeOf", "construct", "setPrototypeOf", "has", "preventExtensions", "ownKeys", "isExtensible", "get", "deleteProperty"])
const v14 = new Proxy(v2,v12);
// v14 = .unknown
v14[1] = "MIN_VALUE";
const v19 = {has:gc,call:gc};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "has"])
const v21 = new Proxy(gc,v19);
// v21 = .unknown
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v26 = v25;
let v28 = undefined;
for (const v33 in "boolean") {
    let v36 = 0;
    let v38 = 7;
    const v39 = v36 + 1;
    // v39 = .primitive
    v36 = v39;
    const v44 = [13.37,13.37,13.37,13.37,13.37];
    // v44 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v45 = 1337 || 0;
    // v45 = .boolean
    const v46 = v21(v45,v36,"boolean",NaN,1);
    // v46 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
