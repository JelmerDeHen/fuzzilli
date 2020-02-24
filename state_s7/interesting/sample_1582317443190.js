function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v3(v4,v5,v6,v7) {
    'use strict'
    let v10 = 0;
    while (v10 < 1337) {
        const v11 = v10 + 1;
        // v11 = .primitive
        v10 = v11;
    }
    const v12 = v5.charAt();
    // v12 = .unknown
}
const v13 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "ownKeys", "set", "getPrototypeOf", "has", "get", "construct", "call", "preventExtensions", "setPrototypeOf", "isExtensible"])
const v15 = new Proxy(v2,v13);
// v15 = .unknown
v15[1] = "MIN_VALUE";
v15.b = v13;
}
%NeverOptimizeFunction(main);
main();
