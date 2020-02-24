function main() {
const v1 = typeof String;
// v1 = .string
const v3 = v1 === "object";
// v3 = .boolean
let v6 = 255;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        v18[3] = v18;
    } catch(v19) {
        const v23 = [13.37,13.37,13.37];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v25 = [1337,1337,1337,1337,1337];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        function v26(v27,v28,v29,v30) {
            'use strict'
            return v28;
        }
        const v31 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v23,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
        // v31 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__"], withMethods: ["deleteProperty", "construct", "get", "isExtensible", "has", "call", "set", "ownKeys", "getPrototypeOf", "setPrototypeOf"])
        const v33 = new Proxy(v25,v31);
        // v33 = .unknown
        const v34 = String.raw(v33,parseFloat,String);
        // v34 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
}
const v35 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "setPrototypeOf", "has", "call", "isExtensible", "getPrototypeOf", "set", "preventExtensions", "ownKeys", "deleteProperty", "get"])
const v37 = new Proxy(v13,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
