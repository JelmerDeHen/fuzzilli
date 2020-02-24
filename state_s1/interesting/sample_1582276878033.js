function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {valueOf:v2,__proto__:v2};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v5 = 13.37;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "construct", "preventExtensions", "setPrototypeOf", "isExtensible", "getPrototypeOf", "set", "has", "deleteProperty", "ownKeys", "call"])
const v24 = new Proxy(v8,v22);
// v24 = .unknown
v24[16] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
