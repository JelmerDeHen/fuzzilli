function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {length:2395520983,b:v2,__proto__:1337,constructor:1337,a:v2,valueOf:v2};
// v3 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "length", "b", "__proto__", "a"])
let v5 = DataView;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v11(v12,v13,v14,v15) {
    'use strict'
    const v18 = Symbol.e;
    // v18 = .unknown
    const v19 = Symbol[v18];
    // v19 = .unknown
    const v20 = {__proto__:"MIN_VALUE",get:v19};
    // v20 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v22 = new Proxy(Reflect,v20);
    // v22 = .unknown
    Object.__proto__ = v22;
}
const v24 = {deleteProperty:v11,set:v11,getPrototypeOf:v11,call:v11,preventExtensions:v11,isExtensible:v11,construct:v11,get:v11,ownKeys:v11,setPrototypeOf:1337,has:v5};
// v24 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "has", "__proto__"], withMethods: ["construct", "preventExtensions", "call", "getPrototypeOf", "isExtensible", "deleteProperty", "ownKeys", "set", "get"])
const v26 = new Proxy(v10,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
const v27 = new Proxy(v3,Object);
// v27 = .unknown
for (const v28 in v27) {
}
}
%NeverOptimizeFunction(main);
main();
