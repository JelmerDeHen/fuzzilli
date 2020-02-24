function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
