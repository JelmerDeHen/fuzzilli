function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    let v7 = 13.37;
    const v8 = {b:v7};
    // v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v7 = NaN;
    const v14 = [NaN,13.37,2];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v15 = Uint8ClampedArray;
    v14.length = 1337;
    const v17 = v14.indexOf(v7,v15,v14,"name",v8);
    // v17 = .integer
}
const v18 = {deleteProperty:v1,set:v1,getPrototypeOf:v1,call:v1,preventExtensions:v1,isExtensible:v1,construct:v1,get:v1,ownKeys:v1,setPrototypeOf:v1,has:v1};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "has", "set", "isExtensible", "call", "getPrototypeOf", "construct", "get", "deleteProperty", "setPrototypeOf", "ownKeys"])
const v20 = new Proxy(Proxy,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
