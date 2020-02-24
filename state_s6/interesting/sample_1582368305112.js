function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = [v1,-4294967297,-4294967297,-4294967297,-4294967297];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v12 = Reflect.construct(ArrayBuffer,Uint32Array,Uint32Array);
    // v12 = .unknown
    try {
        const v13 = v12 >= v3;
        // v13 = .boolean
    } catch(v14) {
    }
}
const v15 = {c:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,constructor:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "constructor", "preventExtensions", "ownKeys", "has", "isExtensible", "get", "setPrototypeOf", "set", "c", "call"])
const v17 = new Proxy(v3,v15);
// v17 = .unknown
v17[1] = "string";
}
%NeverOptimizeFunction(main);
main();
