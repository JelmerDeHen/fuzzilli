function main() {
const v10 = [1.7976931348623157e+308];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v12 = [255,255,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = {a:255,toString:isFinite,c:v10,__proto__:v12,valueOf:"object",constructor:"NEGATIVE_INFINITY"};
// v13 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "a", "__proto__", "constructor"], withMethods: ["toString"])
let v14 = "YgjlQUT4L0";
let v15 = v14;
const v18 = new String(v15,RegExp);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v19 = {toString:13.37,valueOf:v13,d:255,constructor:536870912};
// v19 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "toString", "d", "valueOf"])
const v20 = RegExp.apply(v19,v18);
// v20 = .unknown
const v21 = "NEGATIVE_INFINITY".replace(v20,gc);
// v21 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
