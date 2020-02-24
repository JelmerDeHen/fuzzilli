function main() {
const v2 = {constructor:"symbol",length:9007199254740993};
// v2 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v4 = [];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
try {
    const v5 = Function(v4,v2);
    // v5 = .unknown
} catch(v6) {
}
}
%NeverOptimizeFunction(main);
main();
