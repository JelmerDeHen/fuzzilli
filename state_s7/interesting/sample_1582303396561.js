function main() {
const v2 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "setPrototypeOf", "getPrototypeOf", "set", "has", "ownKeys", "isExtensible", "preventExtensions", "deleteProperty", "construct", "call"])
const v14 = new Proxy(v2,v12);
// v14 = .unknown
v14.__proto__ = "MIN_VALUE";
v14[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
