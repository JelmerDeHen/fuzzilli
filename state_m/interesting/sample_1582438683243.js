function main() {
let v4 = 0;
const v5 = 1337 + 1;
// v5 = .primitive
v4 = v5;
try {
    const v8 = [1337,1337,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    function v9(v10,v11,v12,v13) {
        'use strict'
        (1337)[-1402574946] = v10;
    }
    const v14 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
    // v14 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "construct", "isExtensible", "setPrototypeOf", "getPrototypeOf", "get", "ownKeys", "call", "set", "deleteProperty", "preventExtensions"])
    const v16 = new Proxy(v8,v14);
    // v16 = .unknown
    v16[1] = "MIN_VALUE";
} catch(v17) {
}
}
%NeverOptimizeFunction(main);
main();