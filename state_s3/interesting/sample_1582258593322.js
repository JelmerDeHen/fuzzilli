function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
try {
    const v5 = Function(v4,v2);
    // v5 = .unknown
} catch(v6) {
}
}
%NeverOptimizeFunction(main);
main();
