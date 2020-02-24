function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        try {
            const v12 = [v9,13.37];
            // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v13 = v12[1024];
            // v13 = .unknown
            const v14 = {has:Function,construct:v13,toString:v13,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v13,isExtensible:v13,call:v13,set:Function,getOwnPropertyDescriptor:Function};
            // v14 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "toString", "has", "getOwnPropertyDescriptor", "preventExtensions", "set", "deleteProperty", "call", "isExtensible", "__proto__", "construct"])
            const v16 = new Proxy(v12,v14);
            // v16 = .unknown
            for (const v17 in v16) {
            }
        } catch(v18) {
        }
        function v19(v20,v21) {
            let v25 = 0;
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
        }
        const v27 = v19();
        // v27 = .unknown
    }
    return v3;
}
const v28 = {deleteProperty:v4,set:v4,getPrototypeOf:v4,call:v4,preventExtensions:v4,isExtensible:v4,construct:v4,get:v4,ownKeys:v4,setPrototypeOf:v4,has:v4};
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "call", "construct", "set", "getPrototypeOf", "deleteProperty", "setPrototypeOf", "preventExtensions", "isExtensible", "has", "get"])
const v30 = new Proxy(v3,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
