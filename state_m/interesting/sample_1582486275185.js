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
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
// v30 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "isExtensible", "ownKeys", "construct", "apply", "set", "get", "preventExtensions", "defineProperty", "deleteProperty", "getOwnPropertyDescriptor"])
let v33 = 0;
const v48 = [1.7976931348623157e+308];
// v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v50 = [255,255,13.37];
// v50 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v51 = {a:255,toString:isFinite,c:v48,__proto__:v50,valueOf:"object",constructor:"gM8oAednYn"};
// v51 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "constructor", "__proto__", "c"], withMethods: ["toString"])
let v54 = RegExp;
let v55 = v54;
const v58 = new Proxy(v55,Object);
// v58 = .unknown
const v59 = {toString:v48,valueOf:v51,d:255,constructor:536870912};
// v59 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "__proto__", "d", "toString"])
const v60 = RegExp.apply(v59,v58);
// v60 = .unknown
const v64 = "2IdSaX90v.".replace(v60,gc);
// v64 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
