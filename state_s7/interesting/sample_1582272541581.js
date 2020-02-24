function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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
