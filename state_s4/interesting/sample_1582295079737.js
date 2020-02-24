function main() {
const v1 = {toString:-3632047989};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
const v4 = [-1882595336,-1882595336,-1882595336,-1882595336,-1882595336];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        let v11 = v8;
        const v14 = new Int16Array(19873);
        // v14 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
        const v15 = v14.fill(Float64Array,v11,v1);
        // v15 = .undefined
    } catch(v16) {
    }
}
const v17 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "setPrototypeOf", "set", "get", "ownKeys", "call", "deleteProperty", "isExtensible", "preventExtensions", "construct", "has"])
const v19 = new Proxy(v4,v17);
// v19 = .unknown
v19[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
