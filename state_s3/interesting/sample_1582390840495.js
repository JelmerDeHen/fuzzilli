function main() {
function v2(v3,v4) {
}
const v9 = ["string"];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = [255,255,255];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = {a:255,toString:Math,c:v9,__proto__:v11,valueOf:"object",constructor:"gM8oAednYn"};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "c", "valueOf", "toString", "a"])
const v14 = {__proto__:v9,valueOf:v12,d:536870912,constructor:536870912};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "d", "valueOf"])
const v15 = RegExp.apply(v14,v14);
// v15 = .unknown
const v16 = "string".replace(v15,v2);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
}
%NeverOptimizeFunction(main);
main();
