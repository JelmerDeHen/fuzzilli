function main() {
const v2 = [13.37,13.37,13.37,13.37,"toPrimitive"];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = v2.forEach(parseInt,undefined);
// v5 = .undefined
}
%NeverOptimizeFunction(main);
main();
