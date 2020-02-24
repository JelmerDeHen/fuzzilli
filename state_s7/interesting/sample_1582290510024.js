function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        const v11 = {};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v14 = "species";
        const v15 = new Proxy(v11,Reflect);
        // v15 = .unknown
        v14 = v15;
        const v17 = [1337];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        v14[7] = v17;
    }
    return v3;
}
const v20 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "isExtensible", "ownKeys", "construct", "call", "deleteProperty", "setPrototypeOf", "set", "getPrototypeOf", "preventExtensions", "has"])
const v22 = new Proxy(v3,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
