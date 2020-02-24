function main() {
function v2(v3,v4) {
}
const v9 = [0];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v11 = [255,255,255];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = {a:255,toString:Math,c:v9,__proto__:v11,valueOf:"object",constructor:"gM8oAednYn"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "toString", "a", "valueOf", "constructor", "c"])
const v14 = {__proto__:v9,valueOf:v12,d:255,constructor:536870912};
// v14 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "constructor"])
const v15 = RegExp.apply(v14,v14);
// v15 = .unknown
const v16 = "2IdSaX90v.".replace(v15,v2);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
}
%NeverOptimizeFunction(main);
main();
