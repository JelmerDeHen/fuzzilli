function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {b:v2,constructor:1337,d:-1107350769};
// v4 = .object(ofGroup: Object, withProperties: ["b", "constructor", "__proto__", "d"])
let v6 = "asyncIterator";
const v7 = v4 / v6;
// v7 = .number
v6 = v7;
const v10 = String << String;
// v10 = .integer
const v11 = String.fromCodePoint(65535,v10,v10,v10);
// v11 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
const v12 = v11.lastIndexOf(v6,v7);
// v12 = .integer
}
%NeverOptimizeFunction(main);
main();
