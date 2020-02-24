function main() {
const v2 = [13.37,13.37,13.37,13.37,"toPrimitive"];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = v2.forEach(parseInt,undefined);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
