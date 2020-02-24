function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
const v5 = {constructor:"symbol",length:9007199254740993};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
try {
    const v7 = Function(v2,v5);
    // v7 = .unknown
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
