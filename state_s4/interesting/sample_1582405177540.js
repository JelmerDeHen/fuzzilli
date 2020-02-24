function main() {
function v1(v2,v3,v4,v5) {
    'use strict'
    let v7 = 13.37;
    const v8 = {b:v7};
    // v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
    v7 = NaN;
    const v14 = [NaN,13.37,2];
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v15 = Uint8ClampedArray;
    v14.length = 1337;
    const v17 = v14.indexOf(v7,v15,v14,"name",v8);
    // v17 = .integer
}
const v18 = {deleteProperty:v1,set:v1,getPrototypeOf:v1,call:v1,preventExtensions:v1,isExtensible:v1,construct:v1,get:v1,ownKeys:v1,setPrototypeOf:v1,has:v1};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "isExtensible", "getPrototypeOf", "setPrototypeOf", "has", "ownKeys", "get", "deleteProperty", "construct", "call"])
const v20 = new Proxy(Proxy,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
