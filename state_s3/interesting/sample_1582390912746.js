function main() {
function v2(v3,v4) {
}
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = [1337,1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    function v18(v19,v20) {
        const v22 = RegExp.prototype;
        // v22 = .object()
        v22.constructor = RegExp;
    }
    const v23 = v17.forEach(v18,"eeeRbEqfAO");
    // v23 = .undefined
}
const v24 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["call", "isExtensible", "get", "construct", "set", "setPrototypeOf", "preventExtensions", "getPrototypeOf", "has", "deleteProperty", "ownKeys"])
const v26 = new Proxy(v9,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
const v29 = ["string"];
// v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v31 = [255,255,255];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v32 = {a:255,toString:Math,c:v29,__proto__:v31,valueOf:"object",constructor:"gM8oAednYn"};
// v32 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "c", "valueOf", "a"])
const v34 = {__proto__:v29,valueOf:v32,d:536870912,constructor:536870912};
// v34 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "constructor"])
const v35 = RegExp.apply(v34,v34);
// v35 = .unknown
const v36 = "string".replace(v35,v2);
// v36 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();
