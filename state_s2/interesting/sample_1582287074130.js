function main() {
for (const v1 in "object") {
    const v4 = [1337,1337,1337,1337,1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    function v5(v6,v7,v8,v9) {
        'use strict'
        try {
            v9[3] = v9;
        } catch(v10) {
            try {
                const v13 = [13.37,13.37];
                // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
                const v14 = v13[1024];
                // v14 = .unknown
                const v15 = {has:Function,construct:v14,toString:v14,deleteProperty:Function,setPrototypeOf:Function,preventExtensions:v14,isExtensible:v14,call:v14,set:Function,getOwnPropertyDescriptor:Function};
                // v15 = .object(ofGroup: Object, withProperties: ["preventExtensions", "construct", "isExtensible", "setPrototypeOf", "toString", "__proto__", "has", "call", "set", "getOwnPropertyDescriptor", "deleteProperty"])
                const v17 = new Proxy(v13,v15);
                // v17 = .unknown
                for (const v18 in v17) {
                }
            } catch(v19) {
            }
            function v20(v21,v22) {
                for (const v24 in "boolean") {
                    let v27 = 0;
                    do {
                        const v28 = v27 + 1;
                        // v28 = .primitive
                        v27 = v28;
                    } while (v27 < 8);
                }
            }
            const v29 = v20();
            // v29 = .unknown
        }
        return v4;
    }
    const v30 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,call:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
    // v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "ownKeys", "getPrototypeOf", "call", "get", "has", "isExtensible", "setPrototypeOf", "deleteProperty", "construct", "set"])
    const v32 = new Proxy(v4,v30);
    // v32 = .unknown
    v32[1] = "MIN_VALUE";
}
let v38 = 0;
const v39 = v38 + 1;
// v39 = .primitive
v38 = v39;
}
%NeverOptimizeFunction(main);
main();
