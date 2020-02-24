function main() {
const v3 = "asyncIterator".padEnd(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
const v4 = v3.trim();
// v4 = .undefined
let v5 = eval;
let v8 = 0;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__", "a"])
const v11 = {__proto__:eval,constructor:v10,length:v9};
// v11 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"], withMethods: ["__proto__"])
const v12 = v5 in v11;
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
