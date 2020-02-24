function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [1337,1337,1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        v10[3] = v10;
    } catch(v11) {
        const v13 = v11.constructor;
        // v13 = .unknown
        let v17 = 0;
        let v20 = 0;
        const v21 = v20 + 1;
        // v21 = .primitive
        v20 = v21;
        const v22 = v17 + 1;
        // v22 = .primitive
        v17 = v22;
        const v23 = v13(1337,-1242988596);
        // v23 = .unknown
    }
    return v2;
}
const v24 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "getPrototypeOf", "setPrototypeOf", "isExtensible", "deleteProperty", "has", "get", "ownKeys", "preventExtensions", "call", "set"])
const v26 = new Proxy(v5,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
