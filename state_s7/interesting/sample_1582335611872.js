function main() {
const v1 = RegExp.prototype;
// v1 = .object()
v1.valueOf = RegExp;
function v4(v5,v6) {
}
const v11 = [0];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v14 = {a:255,toString:Math,c:v11,__proto__:v13,valueOf:"*awFp5e5v7",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "constructor", "__proto__", "toString", "c"])
const v16 = {__proto__:v11,valueOf:v14,d:255,constructor:536870912};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "d", "__proto__", "valueOf"])
const v17 = RegExp.apply(v16,v16);
// v17 = .unknown
const v18 = "2IdSaX90v.".replace(v17,v4);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
