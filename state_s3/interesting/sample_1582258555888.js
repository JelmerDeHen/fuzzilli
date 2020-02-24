function main() {
const v2 = [13.37,13.37,13.37,13.37,"toPrimitive"];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = v2.forEach(parseInt,undefined);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
