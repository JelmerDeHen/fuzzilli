function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v2 = v1[-2792452942];
// v2 = .unknown
try {
    const v5 = Symbol(v2);
    // v5 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    const v6 = v5 in 1337;
    // v6 = .boolean
} catch(v7) {
    let v10 = 0;
    let v13 = 0;
}
}
%NeverOptimizeFunction(main);
main();
