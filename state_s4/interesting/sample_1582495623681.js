function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v9 = 13.37;
    const v10 = {b:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    const v15 = [NaN,13.37,2];
    // v15 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v16 = v1;
    v15.length = 1337;
    const v18 = v15.indexOf(v9,v16,v15,"name",v10);
    // v18 = .integer
}
const v19 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "setPrototypeOf", "call", "has", "isExtensible", "ownKeys", "get", "set", "preventExtensions", "getPrototypeOf", "construct"])
const v21 = new Proxy(Proxy,v19);
// v21 = .unknown
v21[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
