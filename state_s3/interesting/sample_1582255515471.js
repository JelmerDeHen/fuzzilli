function main() {
let v2 = 0;
do {
    const v5 = [13.37,13.37,13.37];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v6 = v5[Function];
    // v6 = .unknown
    this[0] = 0;
    const v9 = Function(v6);
    // v9 = .unknown
    const v10 = v2 + 1;
    // v10 = .primitive
    v2 = v10;
} while (v2 < 3);
const v11 = {};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v12 = v11;
}
%NeverOptimizeFunction(main);
main();
