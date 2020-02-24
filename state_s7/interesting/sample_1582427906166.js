function main() {
const v0 = [];
// v0 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v4(v5,v6,v7,v8) {
    'use strict'
    const v12 = [13.37,13.37,13.37,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v13(v14,v15) {
        let v20 = -128;
        const v21 = gc(...arguments);
        // v21 = .undefined
        const v22 = undefined === arguments;
        // v22 = .boolean
        let v24 = 0;
        while (v24 < 1337) {
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
        }
    }
    const v26 = v12.sort(v13);
    // v26 = .undefined
}
const v27 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v27 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "deleteProperty", "setPrototypeOf", "get", "isExtensible", "call", "preventExtensions", "has", "construct", "ownKeys", "getPrototypeOf"])
const v29 = new Proxy(v3,v27);
// v29 = .unknown
v29[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
