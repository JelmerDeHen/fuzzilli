function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v2 = v1[-2792452942];
// v2 = .unknown
try {
    const v5 = RegExp(v2);
    // v5 = .object()
    const v6 = v5 in 1337;
    // v6 = .boolean
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
