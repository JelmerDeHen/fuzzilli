function main() {
let v2 = ArrayBuffer;
const v5 = [1337,1337,1337,1337,ArrayBuffer];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = [...v2,...v9,v8,v10];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v12 = v11 <= v11;
        // v12 = .boolean
    } catch(v13) {
        try {
            const v15 = Function(v13);
            // v15 = .unknown
        } catch(v19) {
        }
    }
}
const v20 = {deleteProperty:v6,set:v6,getPrototypeOf:v6,call:v6,preventExtensions:v6,isExtensible:v6,construct:v6,get:v6,ownKeys:v6,setPrototypeOf:v6,has:v6};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "call", "has", "preventExtensions", "set", "isExtensible", "getPrototypeOf", "ownKeys", "get", "construct", "deleteProperty"])
const v22 = new Proxy(v5,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
