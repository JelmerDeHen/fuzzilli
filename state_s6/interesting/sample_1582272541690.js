function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
