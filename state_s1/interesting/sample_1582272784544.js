function main() {
let v5 = 0;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        const v15 = [1337];
        // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v16 = v15;
        const v18 = "boolean".__proto__;
        // v18 = .object()
        v13[3] = v13;
    } catch(v19) {
    }
}
const v20 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "has", "call", "deleteProperty", "getPrototypeOf", "set", "ownKeys", "preventExtensions", "construct", "isExtensible", "setPrototypeOf"])
const v22 = new Proxy(v8,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
