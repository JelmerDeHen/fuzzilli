function main() {
const v2 = [13.37,13.37,13.37,13.37,"toPrimitive"];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = v2.forEach(parseInt,undefined);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
