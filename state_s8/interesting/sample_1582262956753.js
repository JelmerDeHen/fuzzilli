function main() {
const v3 = new Set("asyncIterator");
// v3 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "clear", "keys", "add", "forEach", "values", "entries", "has"])
let v5 = 0;
const v7 = ["symbol",...v3,v5];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = gc();
// v8 = .undefined
const v9 = gc();
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();
