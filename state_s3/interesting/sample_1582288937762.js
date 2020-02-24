function main() {
const v3 = "asyncIterator".padEnd(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v4 = v3.trim();
// v4 = .undefined
let v5 = eval;
let v8 = 0;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v11 = {__proto__:eval,constructor:v10,length:v9};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["__proto__"])
const v12 = v5 in v11;
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
