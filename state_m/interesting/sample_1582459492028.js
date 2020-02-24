function main() {
const v1 = [1000000000000.0,1000000000000.0,1000000000000.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v1[64] = 0;
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8,v9,v10) {
    'use strict'
    function v11(v12,v13,v14,v15,v16) {
    }
    let v19 = 0;
    do {
        const v20 = v19 + 1;
        // v20 = .primitive
        v19 = v20;
    } while (v19 < 3);
    const v21 = v1.every(v11);
    // v21 = .boolean
    try {
        v10[3] = v10;
    } catch(v22) {
    }
}
const v23 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "deleteProperty", "construct", "ownKeys", "isExtensible", "set", "has", "call", "getPrototypeOf", "get", "setPrototypeOf"])
const v25 = new Proxy(v5,v23);
// v25 = .unknown
v25[1] = "prototype";
}
%NeverOptimizeFunction(main);
main();
