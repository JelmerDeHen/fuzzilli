function main() {
function v2(v3,v4) {
}
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = [1337,1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    function v18(v19,v20) {
        const v22 = RegExp.prototype;
        // v22 = .object()
        v22.constructor = RegExp;
    }
    const v23 = v17.forEach(v18,"eeeRbEqfAO");
    // v23 = .undefined
}
const v24 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getPrototypeOf", "set", "isExtensible", "call", "construct", "ownKeys", "has", "preventExtensions", "setPrototypeOf", "get"])
const v26 = new Proxy(v9,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
const v29 = ["string"];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v31 = [255,255,255];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v32 = {a:255,toString:Math,c:v29,__proto__:v31,valueOf:"object",constructor:"gM8oAednYn"};
// v32 = .object(ofGroup: Object, withProperties: ["a", "c", "constructor", "valueOf", "__proto__", "toString"])
const v34 = {__proto__:v29,valueOf:v32,d:536870912,constructor:536870912};
// v34 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "constructor"])
const v35 = RegExp.apply(v34,v34);
// v35 = .unknown
const v36 = "string".replace(v35,v2);
// v36 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
