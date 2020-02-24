function main() {
const v1 = RegExp.prototype;
// v1 = .object()
v1.valueOf = RegExp;
function v4(v5,v6) {
}
const v11 = [0];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v14 = {a:255,toString:Math,c:v11,__proto__:v13,valueOf:"*awFp5e5v7",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__", "constructor", "a", "c"])
const v16 = {__proto__:v11,valueOf:v14,d:255,constructor:536870912};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "d"])
const v17 = RegExp.apply(v16,v16);
// v17 = .unknown
const v18 = "2IdSaX90v.".replace(v17,v4);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
