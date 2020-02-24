function main() {
const v1 = [482330.0655705447,482330.0655705447];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
const v11 = [1337,1337,1337,1337,1337];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        v16[3] = v16;
    } catch(v17) {
    }
    return v1;
}
const v18 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "construct", "deleteProperty", "setPrototypeOf", "getPrototypeOf", "get", "call", "has", "ownKeys", "isExtensible"])
const v20 = new Proxy(v11,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
v20.constructor = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
