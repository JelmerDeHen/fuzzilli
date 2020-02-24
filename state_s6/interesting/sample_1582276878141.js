function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v3 = {valueOf:v2,__proto__:v2};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v5 = 13.37;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v9(v10,v11,v12,v13) {
    'use strict'
    try {
        v13[1073741824] = v13;
        const v14 = v3();
        // v14 = .unknown
        function v15(v16,v17) {
            "object"[117711610] = v9;
        }
    } catch(v21) {
    }
    return v5;
}
const v22 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "setPrototypeOf", "get", "call", "set", "getPrototypeOf", "deleteProperty", "has", "construct", "ownKeys"])
const v24 = new Proxy(v8,v22);
// v24 = .unknown
v24[16] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
