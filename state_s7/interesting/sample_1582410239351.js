function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v9 = 13.37;
    const v10 = {b:v9};
    // v10 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
    v9 = NaN;
    const v15 = [NaN,13.37,2];
    // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v16 = Uint8ClampedArray;
    const v18 = {constructor:NaN};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor"])
    const v20 = Object.freeze(v15,2939890574,v18);
    // v20 = .undefined
    const v22 = v15.indexOf(v9,v16,v15,"name",v10);
    // v22 = .integer
}
const v23 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "ownKeys", "getPrototypeOf", "deleteProperty", "call", "preventExtensions", "has", "set", "setPrototypeOf", "construct", "isExtensible"])
const v25 = new Proxy(v2,v23);
// v25 = .unknown
v25[-485788671] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
