function main() {
function v4(v5,v6) {
}
const v11 = ["string"];
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v13 = [255,255,255];
// v13 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = {a:255,toString:Math,c:v11,__proto__:v13,valueOf:"object",constructor:"gM8oAednYn"};
// v14 = .object(ofGroup: Object, withProperties: ["a", "c", "constructor", "valueOf", "__proto__", "toString"])
const v16 = {__proto__:v11,valueOf:v14,d:536870912,constructor:536870912};
// v16 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "valueOf"])
const v17 = RegExp.apply(v16,v16);
// v17 = .unknown
const v18 = "string".replace(v17,v4);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
