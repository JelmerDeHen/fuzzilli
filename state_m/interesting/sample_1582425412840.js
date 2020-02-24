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
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v14(v15,v16,v17,v18) {
    'use strict'
    try {
        v18[3] = v18;
    } catch(v19) {
        const v23 = [13.37,13.37,13.37];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v25 = [1337,1337,1337,1337,1337];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        function v26(v27,v28,v29,v30) {
            'use strict'
            return v28;
        }
        const v31 = {deleteProperty:v26,set:v26,getPrototypeOf:v26,call:v26,preventExtensions:v23,isExtensible:v26,construct:v26,get:v26,ownKeys:v26,setPrototypeOf:v26,has:v26};
        // v31 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions"], withMethods: ["construct", "isExtensible", "setPrototypeOf", "getPrototypeOf", "get", "ownKeys", "call", "set", "deleteProperty", "has"])
        const v33 = new Proxy(v25,v31);
        // v33 = .unknown
        const v34 = String.raw(v33,parseFloat,String);
        // v34 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    }
}
const v35 = {deleteProperty:v14,set:v14,getPrototypeOf:v14,call:v14,preventExtensions:v14,isExtensible:v14,construct:v14,get:v14,ownKeys:v14,setPrototypeOf:v14,has:v14};
// v35 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "call", "set", "construct", "getPrototypeOf", "isExtensible", "deleteProperty", "get", "setPrototypeOf", "has", "ownKeys"])
const v37 = new Proxy(v13,v35);
// v37 = .unknown
v37[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
