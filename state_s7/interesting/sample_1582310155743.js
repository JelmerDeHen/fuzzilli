function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v2(v3,v4) {
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    const v12 = [1337,1337,1337,1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    function v13(v14,v15,v16,v17) {
        'use strict'
        try {
            v17[0] = v17;
        } catch(v18) {
            const v19 = v18.constructor;
            // v19 = .unknown
            const v21 = v19(3010967813,-1242988596);
            // v21 = .unknown
        }
    }
    const v22 = {deleteProperty:v13,set:v13,getPrototypeOf:v13,call:v13,preventExtensions:v13,isExtensible:v13,construct:v13,get:v13,ownKeys:v13,setPrototypeOf:v13,has:v13};
    // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "construct", "deleteProperty", "set", "getPrototypeOf", "call", "get", "ownKeys", "preventExtensions", "setPrototypeOf", "isExtensible"])
    const v24 = new Proxy(v12,v22);
    // v24 = .unknown
    v24[1] = "MIN_VALUE";
}
const v25 = v1.sort(v2);
// v25 = .undefined
}
%NeverOptimizeFunction(main);
main();
