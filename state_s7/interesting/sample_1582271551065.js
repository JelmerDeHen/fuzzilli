function main() {
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v35 = [1337];
    // v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v42 = v35 / -3550354675;
    // v42 = .number
    delete v42[v42];
}
const v67 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v67 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "call", "ownKeys", "preventExtensions", "setPrototypeOf", "getPrototypeOf", "has", "deleteProperty", "get", "set", "construct"])
const v69 = new Proxy(v9,v67);
// v69 = .unknown
v69[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
