function main() {
const v1 = RegExp.prototype;
// v1 = .object()
v1.valueOf = RegExp;
function v4(v5,v6) {
}
const v11 = [0];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = {a:255,toString:Math,c:v11,__proto__:v13,valueOf:"*awFp5e5v7",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "constructor", "a", "toString", "__proto__"])
const v16 = {__proto__:v11,valueOf:v14,d:255,constructor:536870912};
// v16 = .object(ofGroup: Object, withProperties: ["constructor", "d", "valueOf", "__proto__"])
const v17 = RegExp.apply(v16,v16);
// v17 = .unknown
const v18 = "2IdSaX90v.".replace(v17,v4);
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
