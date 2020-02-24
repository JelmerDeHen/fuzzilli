function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {get:String};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v6 = Object.defineProperty(v2,256,v4);
// v6 = .undefined
const v9 = [1337,1337,1337,1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v10(v11,v12,v13,v14) {
    'use strict'
    try {
        v14[3] = v14;
    } catch(v15) {
        const v23 = [1.7976931348623157e+308];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v25 = [255,255,13.37];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v26 = {a:255,toString:isFinite,c:v23,toString:v25,valueOf:"object",constructor:"gM8oAednYn"};
        // v26 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString", "constructor", "c", "a"], withMethods: ["toString"])
        const v27 = {toString:v23,valueOf:v26,d:255,constructor:536870912};
        // v27 = .object(ofGroup: Object, withProperties: ["toString", "d", "constructor", "valueOf", "__proto__"])
        const v28 = RegExp.apply(v27,v2);
        // v28 = .unknown
    }
    return v9;
}
const v29 = {deleteProperty:v10,set:v10,getPrototypeOf:v10,call:v10,preventExtensions:v10,isExtensible:v10,construct:v10,get:v10,ownKeys:v10,setPrototypeOf:v10,has:v10};
// v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "has", "isExtensible", "ownKeys", "setPrototypeOf", "get", "preventExtensions", "call", "deleteProperty", "construct", "set"])
const v31 = new Proxy(v9,v29);
// v31 = .unknown
v31[1] = v31;
let v34 = 0;
const v38 = v34 + 1;
// v38 = .primitive
v34 = v38;
}
%NeverOptimizeFunction(main);
main();
