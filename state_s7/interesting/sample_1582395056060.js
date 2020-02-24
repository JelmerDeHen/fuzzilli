function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v2(v3,v4,v5,v6) {
    'use strict'
    let v8 = 13.37;
    const v10 = [13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v11 = {b:v10};
    // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v8 = NaN;
    const v16 = [2,1337];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v17 = [NaN,13.37,2];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v18 = v16;
    v17.length = 1337;
    const v20 = v17.includes(v8,v18,v17,"name",v11);
    // v20 = .boolean
}
const v21 = {deleteProperty:v2,set:v2,getPrototypeOf:v2,call:v2,preventExtensions:v2,isExtensible:v2,construct:v2,get:v2,ownKeys:v2,setPrototypeOf:v2,has:v2};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "set", "preventExtensions", "setPrototypeOf", "call", "has", "construct", "isExtensible", "deleteProperty", "ownKeys"])
const v23 = new Proxy(v1,v21);
// v23 = .unknown
v23[1] = v2;
}
%NeverOptimizeFunction(main);
main();
