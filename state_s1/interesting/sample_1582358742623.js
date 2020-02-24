function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = [13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v11(v12,v13) {
        const v15 = gc(...arguments);
        // v15 = .undefined
        const v17 = Symbol.iterator;
        // v17 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        arguments[v17] = v15;
        let v20 = 0;
        while (v20 < 1337) {
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
        }
    }
    const v22 = v10.sort(v11);
    // v22 = .undefined
}
const v23 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "preventExtensions", "has", "setPrototypeOf", "get", "call", "set", "ownKeys", "isExtensible", "getPrototypeOf", "construct"])
const v25 = new Proxy(v2,v23);
// v25 = .unknown
v25[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
