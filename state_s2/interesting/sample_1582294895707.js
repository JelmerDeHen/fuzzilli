function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        try {
            const v12 = Function(v9);
            // v12 = .unknown
            const v13 = [13.37,13.37];
            // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            const v14 = v13[1024];
            // v14 = .unknown
            const v15 = {has:Function,construct:v14,toString:v14,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v14,isExtensible:v14,call:v14,set:Function,getOwnPropertyDescriptor:Function};
            // v15 = .object(ofGroup: Object, withProperties: ["__proto__", "has", "isExtensible", "getOwnPropertyDescriptor", "call", "set", "construct", "toString", "setPrototypeOf", "preventExtensions", "deleteProperty"])
            const v17 = Proxy(v13,v15);
            // v17 = .unknown
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
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "setPrototypeOf", "call", "get", "set", "getPrototypeOf", "deleteProperty", "isExtensible", "preventExtensions", "ownKeys", "has"])
const v30 = new Proxy(v3,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();