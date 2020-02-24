function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
const v11 = [];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v13(v14,v15) {
    const v17 = {__proto__:536870912};
    // v17 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v17) {
        __proto__[0] = v13;
    }
    try {
    } catch(v20) {
        if (v15) {
        } else {
        }
    }
    for (const v21 in v11) {
        const v22 = 13.37 || v21;
        // v22 = .boolean
    }
}
const v24 = v13(1024,4.0);
// v24 = .unknown
const v30 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "deleteProperty", "apply", "getOwnPropertyDescriptor", "ownKeys", "isExtensible", "construct", "getPrototypeOf", "set", "defineProperty", "get"])
let v33 = 0;
const v48 = [1.7976931348623157e+308];
// v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v50 = [255,255,13.37];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v51 = {a:255,toString:isFinite,c:v48,__proto__:v50,valueOf:"object",constructor:"gM8oAednYn"};
// v51 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "a", "__proto__", "constructor"], withMethods: ["toString"])
let v54 = RegExp;
let v55 = v54;
const v58 = new Proxy(v55,Object);
// v58 = .unknown
const v59 = {toString:v48,valueOf:v51,d:255,constructor:536870912};
// v59 = .object(ofGroup: Object, withProperties: ["valueOf", "constructor", "toString", "d", "__proto__"])
const v60 = RegExp.apply(v59,v58);
// v60 = .unknown
const v64 = "2IdSaX90v.".replace(v60,gc);
// v64 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
