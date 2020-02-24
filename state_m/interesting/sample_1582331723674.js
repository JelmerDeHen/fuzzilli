function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v5(v6,v7,v8,v9) {
    'use strict'
    try {
        v9[3] = v9;
    } catch(v10) {
        function v13(v14,v15) {
        }
        const v21 = [1.7976931348623157e+308];
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v23 = [255,255,255];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v24 = {a:255,toString:isFinite,c:v21,__proto__:v23,valueOf:"object",constructor:"gM8oAednYn"};
        // v24 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "c", "__proto__", "constructor"], withMethods: ["toString"])
        const v26 = {toString:v21,valueOf:v24,d:255,constructor:1};
        // v26 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "constructor", "d", "__proto__"])
        const v27 = RegExp.apply(v26,RegExp);
        // v27 = .unknown
        const v28 = "2IdSaX90v.".replace(v27,v13);
        // v28 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
    }
    return v1;
}
const v29 = {deleteProperty:v5,set:v5,getPrototypeOf:v5,c:v5,preventExtensions:v5,isExtensible:v5,construct:v5,get:v5,ownKeys:v5,setPrototypeOf:v5,has:v5};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "deleteProperty", "set", "construct", "has", "get", "preventExtensions", "ownKeys", "isExtensible", "c", "setPrototypeOf"])
const v31 = new Proxy(v4,v29);
// v31 = .unknown
v31[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
