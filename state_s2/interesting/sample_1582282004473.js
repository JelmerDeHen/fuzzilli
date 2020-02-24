function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v2 = v1[-2792452942];
// v2 = .unknown
try {
    const v5 = Symbol(v2);
    // v5 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    const v6 = v5 in 1337;
    // v6 = .boolean
} catch(v7) {
    let v10 = 0;
    let v13 = 0;
}
}
%NeverOptimizeFunction(main);
main();
