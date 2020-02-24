function main() {
const v3 = "asyncIterator".padEnd(1337);
// v3 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v4 = v3.trim();
// v4 = .undefined
let v5 = eval;
let v8 = 0;
const v9 = [];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = {a:v9};
// v10 = .object(ofGroup: Object, withProperties: ["a", "__proto__"])
const v11 = {__proto__:eval,constructor:v10,length:v9};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["__proto__"])
const v12 = v5 in v11;
// v12 = .boolean
}
%NeverOptimizeFunction(main);
main();
