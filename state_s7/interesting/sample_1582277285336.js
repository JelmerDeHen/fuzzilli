function main() {
let v3 = 0;
let v6 = 0;
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        const v18 = ["a",-9007199254740992,-9007199254740992];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v21 = {constructor:"symbol",length:9007199254740993};
        // v21 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
        const v22 = v18.indexOf(RegExp,v21);
        // v22 = .integer
        v14[3] = v14;
    } catch(v23) {
    }
}
const v24 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "set", "call", "deleteProperty", "get", "ownKeys", "construct", "setPrototypeOf", "getPrototypeOf", "has"])
const v26 = new Proxy(v9,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
