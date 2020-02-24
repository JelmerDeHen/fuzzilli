function main() {
function v2(v3,v4) {
}
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v10(v11,v12,v13,v14) {
    'use strict'
    const v17 = [1337,1337,1337,1337,1337];
    // v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v18(v19,v20) {
        const v22 = RegExp.prototype;
        // v22 = .object()
        v22.constructor = RegExp;
    }
    const v23 = v17.forEach(v18,"eeeRbEqfAO");
    // v23 = .undefined
}
const v24 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "construct", "ownKeys", "getPrototypeOf", "get", "deleteProperty", "has", "call", "set", "setPrototypeOf", "isExtensible"])
const v26 = new Proxy(v9,v24);
// v26 = .unknown
v26[1] = "MIN_VALUE";
const v29 = ["string"];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v31 = [255,255,255];
// v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v32 = {a:255,toString:Math,c:v29,__proto__:v31,valueOf:"object",constructor:"gM8oAednYn"};
// v32 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "valueOf", "toString", "a", "constructor"])
const v34 = {__proto__:v29,valueOf:v32,d:536870912,constructor:536870912};
// v34 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "d", "valueOf"])
const v35 = RegExp.apply(v34,v34);
// v35 = .unknown
const v36 = "string".replace(v35,v2);
// v36 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
