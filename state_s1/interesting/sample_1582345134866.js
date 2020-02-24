function main() {
const v1 = [59446.68221467873];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v2 = 59446.68221467873 === v1;
// v2 = .boolean
const v8 = [1337,1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v9(v10,v11,v12,v13) {
    'use strict'
    let v16 = 0;
    while (v16 < 1337) {
        const v17 = v16 + 1;
        // v17 = .primitive
        v16 = v17;
        let v19 = 0;
        const v20 = arguments[1337];
        // v20 = .unknown
        v19 = v10;
        for (const v21 in v19) {
            const v22 = arguments[1087792456];
            // v22 = .unknown
        }
    }
    let v28 = 0;
    const v29 = v28 + 1;
    // v29 = .primitive
    v28 = v29;
}
const v30 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getPrototypeOf", "preventExtensions", "deleteProperty", "call", "construct", "isExtensible", "set", "has", "ownKeys", "get"])
const v32 = new Proxy(v8,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
v32.b = v30;
}
%NeverOptimizeFunction(main);
main();
