function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {__proto__:"MAX_SAFE_INTEGER",d:65535,e:v3,constructor:13.37,c:1337};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c", "e", "d"])
let v6 = v5;
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v14 = "size";
        function v15(v16,v17) {
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
        }
        const v23 = [1337];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        try {
            const v26 = [v6,1337,1337,1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            function v27(v28,v29,v30,v31) {
                'use strict'
            }
            const v32 = {deleteProperty:v27,set:v27,getPrototypeOf:v27,call:v27,preventExtensions:v27,isExtensible:v27,construct:v27,get:v27,ownKeys:v27,setPrototypeOf:v27,has:v27};
            // v32 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "isExtensible", "ownKeys", "deleteProperty", "construct", "get", "call", "getPrototypeOf", "preventExtensions", "has", "set"])
            const v34 = Proxy(v26,v32);
            // v34 = .unknown
            v34[1] = "MIN_VALUE";
        } catch(v35) {
        }
        let v36 = v23;
        const v37 = v15(v36);
        // v37 = .unknown
        if (v9) {
            const v38 = v8();
            // v38 = .unknown
        } else {
        }
    }
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v41 = v40;
const v42 = v8(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
