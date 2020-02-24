function main() {
const v3 = Array(127);
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (let v7 = 0; v7 < 100; v7++) {
}
for (let v11 = 0; v11 < 8; v11++) {
    const v13 = Symbol.toPrimitive;
    // v13 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    Array[v13] = v3;
    let v16 = 0;
}
}
%NeverOptimizeFunction(main);
main();
