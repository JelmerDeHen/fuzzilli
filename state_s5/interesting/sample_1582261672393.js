function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
const v5 = {constructor:"symbol",length:9007199254740993};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"])
try {
    const v7 = Function(v2,v5);
    // v7 = .unknown
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
