function main() {
let v3 = 0;
const v7 = new Set("asyncIterator");
// v7 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "add", "forEach", "has", "clear", "keys", "values", "entries"])
let v9 = 0;
const v10 = ["symbol",...v7,v9];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
v3 = v10;
const v11 = JSON.stringify(v3);
// v11 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
let v14 = 0;
const v15 = JSON.parse(v11,0);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
