function main() {
const v1 = RegExp.prototype;
// v1 = .object()
v1.valueOf = RegExp;
function v4(v5,v6) {
}
const v11 = [0];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {a:255,toString:Math,c:v11,__proto__:v13,valueOf:"*awFp5e5v7",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "c", "a", "constructor", "valueOf"])
const v16 = {__proto__:v11,valueOf:v14,d:255,constructor:536870912};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "__proto__", "d"])
const v17 = RegExp.apply(v16,v16);
// v17 = .unknown
const v18 = "2IdSaX90v.".replace(v17,v4);
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
}
%NeverOptimizeFunction(main);
main();
