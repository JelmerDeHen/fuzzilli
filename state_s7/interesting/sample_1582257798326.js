function main() {
const v3 = 13.37 << eval;
// v3 = .integer
const v4 = "pvU0UUjoya".codePointAt(v3);
// v4 = .integer
const v5 = eval(v4);
// v5 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v10 = Array(1);
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v11 = v10.unshift(1337,"object");
// v11 = .integer
}
%NeverOptimizeFunction(main);
main();
