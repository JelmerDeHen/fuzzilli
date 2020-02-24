function main() {
const v3 = "asyncIterator".padEnd(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
const v4 = v3.trim();
// v4 = .undefined
let v5 = eval;
let v8 = 0;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
const v11 = {__proto__:eval,constructor:v10,length:v9};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["__proto__"])
const v12 = v5 in v11;
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
