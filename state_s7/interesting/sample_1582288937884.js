function main() {
const v3 = "asyncIterator".padEnd(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v4 = v3.trim();
// v4 = .undefined
let v5 = eval;
let v8 = 0;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v11 = {__proto__:eval,constructor:v10,length:v9};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "length"], withMethods: ["__proto__"])
const v12 = v5 in v11;
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
