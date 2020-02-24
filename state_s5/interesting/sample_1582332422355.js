function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
// v18 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "set", "preventExtensions", "isExtensible", "getPrototypeOf", "get", "deleteProperty", "construct", "ownKeys", "setPrototypeOf", "has"])
const v20 = new Proxy(v3,v18);
// v20 = .unknown
v20[1] = "MIN_VALUE";
v20.b = v18;
}
%NeverOptimizeFunction(main);
main();
