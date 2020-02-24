function main() {
function v1(v2,v3) {
    const v5 = {__proto__:536870912};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
const v11 = [1.7976931348623157e+308];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = {a:255,toString:isFinite,c:v11,__proto__:v13,valueOf:"object",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["c", "a", "__proto__", "valueOf", "constructor"], withMethods: ["toString"])
let v17 = RegExp;
let v18 = v17;
const v21 = new Proxy(v18,Object);
// v21 = .unknown
const v22 = Object.freeze(v21);
// v22 = .undefined
const v23 = {toString:v11,valueOf:v14,d:255,constructor:536870912};
// v23 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "toString", "d", "constructor"])
const v24 = RegExp.apply(v23,RegExp);
// v24 = .unknown
const v25 = "2IdSaX90v.".replace(v24,v1);
// v25 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
