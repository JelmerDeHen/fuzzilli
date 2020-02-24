function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    let v11 = 0;
    while (v11 < 1337) {
        const v12 = v11 + 1;
        // v12 = .primitive
        v11 = v12;
        let v13 = v5;
        const v14 = arguments[1337];
        // v14 = .unknown
        const v15 = arguments[1337];
        // v15 = .unknown
    }
}
const v16 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "isExtensible", "ownKeys", "deleteProperty", "getPrototypeOf", "get", "has", "preventExtensions", "call", "setPrototypeOf"])
const v18 = new Proxy(v3,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
v18.b = v16;
}
%NeverOptimizeFunction(main);
main();
