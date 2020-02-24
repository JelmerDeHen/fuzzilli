function main() {
const v2 = [13.37,13.37,13.37,13.37,"toPrimitive"];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = v2.forEach(parseInt,undefined);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
