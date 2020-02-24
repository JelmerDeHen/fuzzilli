function main() {
const v2 = [1337,"MIN_VALUE",1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5,v6,v7) {
    'use strict'
    try {
        v7[3] = v7;
    } catch(v8) {
        try {
            const v11 = Function("MIN_VALUE");
            // v11 = .unknown
            const v12 = [v8,13.37];
            // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            const v13 = v12[1024];
            // v13 = .unknown
            const v14 = {has:Function,construct:v13,toString:v13,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v13,isExtensible:v13,call:v13,set:Function,getOwnPropertyDescriptor:Function};
            // v14 = .object(ofGroup: Object, withProperties: ["set", "toString", "deleteProperty", "construct", "preventExtensions", "setPrototypeOf", "call", "has", "getOwnPropertyDescriptor", "isExtensible", "__proto__"])
            let v17 = 0;
            const v18 = v3();
            // v18 = .unknown
            let v21 = 0;
            const v23 = Proxy(v12,v14);
            // v23 = .unknown
        } catch(v24) {
        }
        function v25(v26,v27) {
        }
        const v28 = v25();
        // v28 = .unknown
    }
    return v2;
}
const v29 = {deleteProperty:v3,set:v3,getPrototypeOf:v3,call:v3,preventExtensions:v3,isExtensible:v3,construct:v3,get:v3,ownKeys:v3,setPrototypeOf:v3,has:v3};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "preventExtensions", "isExtensible", "set", "ownKeys", "construct", "deleteProperty", "get", "has", "setPrototypeOf", "getPrototypeOf"])
const v31 = new Proxy(v2,v29);
// v31 = .unknown
v31[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
