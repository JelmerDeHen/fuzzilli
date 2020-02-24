function main() {
const v10 = [1.7976931348623157e+308];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v12 = [3197265295,3197265295,13.37];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v13 = {a:3197265295,toString:isFinite,c:v10,__proto__:v12,valueOf:"object",constructor:"gM8oAednYn"};
// v13 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "c", "a", "__proto__"], withMethods: ["toString"])
let v14 = "symbol";
let v15 = v14;
const v18 = new String(v15,RegExp);
// v18 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v19 = {toString:13.37,valueOf:v13,d:3197265295,constructor:536870912};
// v19 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "constructor", "d", "__proto__"])
const v20 = RegExp.apply(v19,v18);
// v20 = .unknown
const v21 = "gM8oAednYn".replace(v20,gc);
// v21 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
