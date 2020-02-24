function main() {
function v2(v3,v4) {
    let v7 = -128;
    while (v7 < 5) {
        const v8 = v7 + 1;
        // v8 = .primitive
        const v9 = -4294967297 - v8;
        // v9 = .number
        const v11 = [1337,1337,1337,1337,1337];
        // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        function v12(v13,v14,v15,v16) {
            'use strict'
        }
        const v17 = {deleteProperty:v12,set:v12,getPrototypeOf:v12,call:v12,preventExtensions:v12,isExtensible:v12,construct:v12,get:v12,ownKeys:v12,setPrototypeOf:v12,has:v12};
        // v17 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "call", "get", "has", "construct", "isExtensible", "set", "preventExtensions", "setPrototypeOf", "ownKeys", "getPrototypeOf"])
        const v19 = new Proxy(v11,v17);
        // v19 = .unknown
        const v20 = v7 + v9;
        // v20 = .primitive
        v7 = v8;
        let v21 = -4294967297;
        delete v20[v21];
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v24 = v23;
const v25 = v2(v24);
// v25 = .unknown
const v26 = v2(1337,-2490171089);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
