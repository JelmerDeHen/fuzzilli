function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {b:v2,constructor:1337,d:-1107350769};
// v4 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "constructor", "d"])
let v6 = "asyncIterator";
const v7 = v4 / v6;
// v7 = .number
v6 = v7;
const v10 = String << String;
// v10 = .integer
const v11 = String.fromCodePoint(65535,v10,v10,v10);
// v11 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v12 = v11.lastIndexOf(v6,v7);
// v12 = .integer
}
%NeverOptimizeFunction(main);
main();
