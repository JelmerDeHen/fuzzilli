function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
