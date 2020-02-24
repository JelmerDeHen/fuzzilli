function main() {
let v2 = -2;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v7(v8,v9,v10,v11) {
    'use strict'
    let v13 = 13.37;
    const v15 = [13.37,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v16 = {b:v15};
    // v16 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v13 = NaN;
    const v21 = [2,1337];
    // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v22 = [NaN,13.37,2];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v23 = v21;
    v22.length = 1337;
    const v25 = {get:NaN};
    // v25 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v27 = Object.seal(v22,65537,v25);
    // v27 = .object()
    const v29 = v22.includes(v13,v23,v22,"name",v16);
    // v29 = .boolean
    let v34 = 0;
    return v6;
}
const v35 = {deleteProperty:v7,set:v7,getPrototypeOf:v7,call:v7,preventExtensions:v7,isExtensible:v7,construct:v7,get:v7,ownKeys:v7,setPrototypeOf:v7,has:v7};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "getPrototypeOf", "set", "get", "deleteProperty", "ownKeys", "has", "setPrototypeOf", "isExtensible", "preventExtensions", "call"])
const v37 = new Proxy(v6,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
