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
        let v15 = 0;
        const v16 = arguments[1337];
        // v16 = .unknown
        const v17 = v15 + 1;
        // v17 = .primitive
        v15 = v17;
    }
}
const v18 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "setPrototypeOf", "get", "deleteProperty", "call", "isExtensible", "has", "getPrototypeOf", "construct", "ownKeys", "preventExtensions"])
const v20 = new Proxy(v3,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
v20.b = v18;
}
%NeverOptimizeFunction(main);
main();
