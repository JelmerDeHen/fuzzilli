function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v3 = [];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
try {
    const v4 = "symbol"(v3,v2);
    // v4 = .unknown
} catch(v5) {
}
}
%NeverOptimizeFunction(main);
main();
