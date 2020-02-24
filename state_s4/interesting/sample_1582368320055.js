function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = [v1,-4294967297,-4294967297,-4294967297,-4294967297];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "ownKeys", "constructor", "c", "has", "get", "set", "setPrototypeOf", "preventExtensions", "call", "isExtensible"])
const v17 = new Proxy(v3,v15);
// v17 = .unknown
v17[1] = "string";
}
%NeverOptimizeFunction(main);
main();
