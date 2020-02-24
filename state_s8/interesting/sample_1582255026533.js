function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
try {
    const v4 = "symbol"(v3,v2);
    // v4 = .unknown
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();
