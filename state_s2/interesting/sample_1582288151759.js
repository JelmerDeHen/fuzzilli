function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        try {
            const v12 = [v9,13.37];
            // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v13 = v12[1024];
            // v13 = .unknown
            const v14 = {has:Function,construct:v13,toString:v13,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v13,isExtensible:v13,call:v13,set:Function,getOwnPropertyDescriptor:Function};
            // v14 = .object(ofGroup: Object, withProperties: ["construct", "toString", "has", "setPrototypeOf", "call", "__proto__", "isExtensible", "preventExtensions", "getOwnPropertyDescriptor", "deleteProperty", "set"])
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
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "setPrototypeOf", "set", "ownKeys", "get", "deleteProperty", "preventExtensions", "has", "isExtensible", "getPrototypeOf", "call"])
const v30 = new Proxy(v3,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
