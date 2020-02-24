function main() {
const v10 = [1.7976931348623157e+308];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = [255,255,-5.0];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = {a:255,toString:isFinite,c:v10,__proto__:v12,valueOf:"object",constructor:"gM8oAednYn"};
// v13 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "a", "valueOf", "constructor"], withMethods: ["toString"])
let v14 = "YgjlQUT4L0";
let v15 = v14;
const v18 = new String(v15,RegExp);
// v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v19 = {toString:13.37,valueOf:v13,d:255,constructor:536870912};
// v19 = .object(ofGroup: Object, withProperties: ["d", "toString", "__proto__", "valueOf", "constructor"])
const v20 = RegExp.apply(v19,v18);
// v20 = .unknown
const v21 = v18.replace(v20,gc);
// v21 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
