function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v4(v5,v6,v7,v8) {
    'use strict'
    try {
        v8[3] = v8;
    } catch(v9) {
        try {
            const v12 = [v9,13.37];
            // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            const v13 = v12[1024];
            // v13 = .unknown
            const v14 = {has:Function,construct:v13,toString:v13,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v13,isExtensible:v13,call:v13,set:Function,getOwnPropertyDescriptor:Function};
            // v14 = .object(ofGroup: Object, withProperties: ["call", "setPrototypeOf", "isExtensible", "getOwnPropertyDescriptor", "set", "has", "toString", "preventExtensions", "__proto__", "construct", "deleteProperty"])
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
// v28 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "getPrototypeOf", "set", "isExtensible", "ownKeys", "deleteProperty", "has", "construct", "call", "preventExtensions", "setPrototypeOf"])
const v30 = new Proxy(v3,v28);
// v30 = .unknown
v30[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
