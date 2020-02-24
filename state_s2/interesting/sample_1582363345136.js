function main() {
const v2 = [1337,1337,1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5,v6,v7) {
    'use strict'
    const v10 = [13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
// v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "has", "construct", "ownKeys", "get", "getPrototypeOf", "setPrototypeOf", "call", "set", "deleteProperty", "preventExtensions"])
const v34 = new Proxy(v2,v32);
// v34 = .unknown
v34[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
