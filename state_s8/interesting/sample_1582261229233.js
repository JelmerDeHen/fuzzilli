function main() {
const v3 = new Set("asyncIterator");
// v3 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "clear", "keys", "add", "forEach", "values", "entries", "has"])
const v4 = v3.__proto__;
// v4 = .object()
let v6 = 0;
const v8 = ["symbol",...v3,v6];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = gc();
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();
