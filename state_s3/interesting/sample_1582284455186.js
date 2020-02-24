function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v2(v3,v4) {
    const v7 = [1337,1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v8(v9,v10,v11,v12) {
        'use strict'
        try {
            v12[3] = v12;
        } catch(v13) {
            const v15 = Function(1337);
            // v15 = .unknown
        }
    }
    const v16 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "has", "getPrototypeOf", "preventExtensions", "get", "call", "setPrototypeOf", "deleteProperty", "set", "construct", "isExtensible"])
    const v18 = new Proxy(v7,v16);
    // v18 = .unknown
    v18[1] = "MIN_VALUE";
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
}
const v24 = v1.forEach(v2);
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
