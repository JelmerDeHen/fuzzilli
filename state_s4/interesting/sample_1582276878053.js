function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {valueOf:v2,__proto__:v2};
// v3 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v5 = 13.37;
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
// v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "get", "call", "preventExtensions", "deleteProperty", "ownKeys", "getPrototypeOf", "setPrototypeOf", "has", "isExtensible"])
const v24 = new Proxy(v8,v22);
// v24 = .unknown
v24[16] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
