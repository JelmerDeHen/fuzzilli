function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = 2.2250738585072014e-308 / 9007199254740991;
// v5 = .number
function v6(v7,v8,v9,v10) {
    'use strict'
    let v13 = 0;
    while (v13 < 1337) {
        const v14 = v13 + 1;
        // v14 = .primitive
        v13 = v14;
        const v15 = v5 & 0;
        // v15 = .integer
    }
}
const v16 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "construct", "call", "getPrototypeOf", "setPrototypeOf", "get", "set", "deleteProperty", "preventExtensions", "ownKeys", "isExtensible"])
const v18 = new Proxy(v2,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
v18.b = v16;
}
%NeverOptimizeFunction(main);
main();
