function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "object") {
    const v8 = [1337,v5,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    function v9(v10,v11,v12,v13) {
        'use strict'
        try {
            v13[3] = v13;
        } catch(v14) {
            const v17 = [1337,1337,1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            function v18(v19,v20,v21,v22) {
                'use strict'
                function v24(v25,v26) {
                    const v28 = eval(v24);
                    // v28 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
                }
            }
            const v29 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "call", "has", "ownKeys", "isExtensible", "construct", "get", "setPrototypeOf", "deleteProperty", "preventExtensions", "set"])
            const v31 = new Proxy(v17,v29);
            // v31 = .unknown
            let v32 = 0;
            const v33 = v32 + 1;
            // v33 = .primitive
            const v35 = 2.2250738585072014e-308 / v33;
            // v35 = .number
            const v36 = [v35];
            // v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        }
        return v8;
    }
    const v37 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
    // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "construct", "setPrototypeOf", "deleteProperty", "preventExtensions", "isExtensible", "call", "set", "ownKeys", "has", "getPrototypeOf"])
    const v39 = new Proxy(v8,v37);
    // v39 = .unknown
    v39[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
