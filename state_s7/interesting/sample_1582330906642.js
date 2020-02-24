function main() {
function v1(v2,v3) {
    const v5 = {__proto__:536870912};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"])
}
const v11 = [1.7976931348623157e+308];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v14 = {a:255,toString:isFinite,c:v11,__proto__:v13,valueOf:"object",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "c", "a", "__proto__"], withMethods: ["toString"])
let v17 = RegExp;
let v18 = v17;
const v21 = new Proxy(v18,Object);
// v21 = .unknown
const v22 = Object.freeze(v21);
// v22 = .undefined
const v23 = {toString:v11,valueOf:v14,d:255,constructor:536870912};
// v23 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "valueOf", "constructor"])
const v24 = RegExp.apply(v23,RegExp);
// v24 = .unknown
const v25 = "2IdSaX90v.".replace(v24,v1);
// v25 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
