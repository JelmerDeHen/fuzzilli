function main() {
let v4 = 0;
const v5 = 1337 + 1;
// v5 = .primitive
v4 = v5;
try {
    const v8 = [1337,1337,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v9(v10,v11,v12,v13) {
        'use strict'
        (1337)[-1402574946] = v10;
    }
    const v14 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "setPrototypeOf", "construct", "call", "preventExtensions", "isExtensible", "has", "set", "ownKeys", "deleteProperty", "getPrototypeOf"])
    const v16 = new Proxy(v8,v14);
    // v16 = .unknown
    v16[1] = "MIN_VALUE";
} catch(v17) {
}
}
%NeverOptimizeFunction(main);
main();
