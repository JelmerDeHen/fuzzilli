function main() {
const v10 = [1.7976931348623157e+308];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = [255,255,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = {a:255,toString:isFinite,c:v10,__proto__:v12,valueOf:"object",constructor:"gM8oAednYn"};
// v13 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "constructor", "c", "a"], withMethods: ["toString"])
let v15 = "YgjlQUT4L0";
let v16 = v15;
const v19 = new String(v16,RegExp);
// v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v20 = {toString:13.37,valueOf:v13,d:255,constructor:536870912};
// v20 = .object(ofGroup: Object, withProperties: ["d", "toString", "valueOf", "__proto__", "constructor"])
const v21 = RegExp.apply(v20,v19);
// v21 = .unknown
const v22 = "2IdSaX90v.".replace(v21,gc);
// v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
