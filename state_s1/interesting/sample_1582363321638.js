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
        let v22 = 0;
        arguments[gc] = "MIN_VALUE";
        const v26 = Symbol.iterator;
        // v26 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        arguments[v26] = v15;
        let v29 = 0;
        const v30 = v29 + 1;
        // v30 = .primitive
        v29 = v30;
    }
    const v31 = v10.sort(v11);
    // v31 = .undefined
}
const v32 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "preventExtensions", "get", "has", "deleteProperty", "getPrototypeOf", "isExtensible", "setPrototypeOf", "call", "ownKeys", "construct"])
const v34 = new Proxy(v2,v32);
// v34 = .unknown
v34[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
