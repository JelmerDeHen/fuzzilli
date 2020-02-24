function main() {
function v2(v3,v4) {
}
const v9 = ["string"];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = [255,255,255];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = {a:255,toString:Math,c:v9,__proto__:v11,valueOf:"object",constructor:"gM8oAednYn"};
// v12 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "a", "constructor", "valueOf", "c"])
const v14 = {__proto__:v9,valueOf:v12,d:536870912,constructor:536870912};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "d"])
const v15 = RegExp.apply(v14,v14);
// v15 = .unknown
const v16 = "string".replace(v15,v2);
// v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
