function main() {
let v1 = RegExp;
let v2 = v1;
const v5 = new Proxy(v2,Object);
// v5 = .unknown
const v6 = Object.freeze(v5);
// v6 = .undefined
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        v14[3] = v14;
    } catch(v15) {
        const v22 = [1.7976931348623157e+308];
        // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v24 = [255,255,255];
        // v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v25 = {a:255,toString:isFinite,c:v22,__proto__:v24,valueOf:"object",constructor:"gM8oAednYn"};
        // v25 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "a", "c", "__proto__"], withMethods: ["toString"])
        const v27 = {toString:v22,valueOf:v25,d:255,constructor:1};
        // v27 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "toString", "valueOf", "constructor"])
        const v28 = RegExp.apply(v27,RegExp);
        // v28 = .unknown
        const v29 = "2IdSaX90v.".replace(v28,v11);
        // v29 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    }
}
const v30 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,c:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "c", "getPrototypeOf", "has", "get", "preventExtensions", "construct", "isExtensible", "setPrototypeOf", "set", "ownKeys"])
const v32 = new Proxy(v9,v30);
// v32 = .unknown
v32[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
