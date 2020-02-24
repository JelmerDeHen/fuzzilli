function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {b:v2,constructor:1337,d:-1107350769};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__", "d"])
let v6 = "asyncIterator";
const v7 = v4 / v6;
// v7 = .number
v6 = v7;
const v10 = String << String;
// v10 = .integer
const v12 = String.fromCodePoint(65535,v10,v10,v10);
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v13 = v12.lastIndexOf(v6,0);
// v13 = .integer
}
%NeverOptimizeFunction(main);
main();
