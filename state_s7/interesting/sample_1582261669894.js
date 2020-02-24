function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
const v5 = {constructor:"symbol",length:9007199254740993};
// v5 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
try {
    const v7 = Function(v2,v5);
    // v7 = .unknown
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
