function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
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
// v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "has", "ownKeys", "construct", "getPrototypeOf", "preventExtensions", "isExtensible", "set", "get", "call", "setPrototypeOf"])
const v18 = new Proxy(v3,v16);
// v18 = .unknown
v18[1] = "MIN_VALUE";
v18.b = v16;
}
%NeverOptimizeFunction(main);
main();
