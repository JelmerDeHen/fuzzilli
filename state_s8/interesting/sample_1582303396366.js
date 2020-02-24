function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        let v8 = v6;
        const v9 = v8[1987691190];
        // v9 = .unknown
        const v10 = v8 instanceof v7;
        // v10 = .boolean
    } catch(v11) {
    }
}
const v12 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "isExtensible", "construct", "get", "ownKeys", "getPrototypeOf", "set", "call", "preventExtensions", "deleteProperty", "has"])
const v14 = new Proxy(v2,v12);
// v14 = .unknown
v14.__proto__ = "MIN_VALUE";
v14[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
