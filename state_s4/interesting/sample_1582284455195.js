function main() {
const v1 = [1337,1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v2(v3,v4) {
    const v7 = [1337,1337,1337,1337,1337];
    // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
    // v16 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "isExtensible", "ownKeys", "preventExtensions", "set", "getPrototypeOf", "construct", "get", "setPrototypeOf", "call", "deleteProperty"])
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
