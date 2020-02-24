function main() {
const v1 = RegExp.prototype;
// v1 = .object()
v1.valueOf = RegExp;
function v4(v5,v6) {
}
const v11 = [0];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v14 = {a:255,toString:Math,c:v11,__proto__:v13,valueOf:"*awFp5e5v7",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "toString", "valueOf", "constructor"])
const v16 = {__proto__:v11,valueOf:v14,d:255,constructor:536870912};
// v16 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "constructor", "__proto__"])
const v17 = RegExp.apply(v16,v16);
// v17 = .unknown
const v18 = "2IdSaX90v.".replace(v17,v4);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
}
%NeverOptimizeFunction(main);
main();
