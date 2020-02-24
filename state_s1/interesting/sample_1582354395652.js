function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = [v1,-1882595336,-1882595336,-1882595336,-1882595336];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v12 = Reflect.construct(Map,Uint32Array,Uint32Array);
    // v12 = .unknown
    try {
        const v13 = v12 >= v3;
        // v13 = .boolean
    } catch(v14) {
    }
}
const v15 = {c:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "setPrototypeOf", "getPrototypeOf", "call", "isExtensible", "construct", "get", "set", "c", "ownKeys", "preventExtensions"])
const v17 = new Proxy(v3,v15);
// v17 = .unknown
v17[1] = "string";
}
%NeverOptimizeFunction(main);
main();
