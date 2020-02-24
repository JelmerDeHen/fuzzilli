function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "object") {
    const v8 = [1337,v5,1337,1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v9(v10,v11,v12,v13) {
        'use strict'
        try {
            v13[3] = v13;
        } catch(v14) {
            const v17 = [1337,1337,1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            function v18(v19,v20,v21,v22) {
                'use strict'
                function v24(v25,v26) {
                    const v28 = eval(v24);
                    // v28 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
                }
            }
            const v29 = {deleteProperty:v18,set:v18,getPrototypeOf:v18,call:v18,preventExtensions:v18,isExtensible:v18,construct:v18,get:v18,ownKeys:v18,setPrototypeOf:v18,has:v18};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "setPrototypeOf", "deleteProperty", "has", "isExtensible", "preventExtensions", "getPrototypeOf", "get", "set", "call", "construct"])
            const v31 = new Proxy(v17,v29);
            // v31 = .unknown
            let v32 = 0;
            const v33 = v32 + 1;
            // v33 = .primitive
            const v35 = 2.2250738585072014e-308 / v33;
            // v35 = .number
            const v36 = [v35];
            // v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        }
        return v8;
    }
    const v37 = {deleteProperty:v9,set:v9,getPrototypeOf:v9,call:v9,preventExtensions:v9,isExtensible:v9,construct:v9,get:v9,ownKeys:v9,setPrototypeOf:v9,has:v9};
    // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "set", "has", "setPrototypeOf", "getPrototypeOf", "get", "isExtensible", "deleteProperty", "preventExtensions", "ownKeys", "call"])
    const v39 = new Proxy(v8,v37);
    // v39 = .unknown
    v39[1] = "MIN_VALUE";
}
}
%NeverOptimizeFunction(main);
main();
