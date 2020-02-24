function main() {
let v2 = ArrayBuffer;
const v5 = [1337,1337,1337,1337,ArrayBuffer];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8,v9,v10) {
    'use strict'
    try {
        const v11 = [...v2,...v9,v8,v10];
        // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "construct", "preventExtensions", "isExtensible", "get", "getPrototypeOf", "setPrototypeOf", "call", "ownKeys", "deleteProperty", "set"])
const v22 = new Proxy(v5,v20);
// v22 = .unknown
v22[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
