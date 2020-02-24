function main() {
const v1 = {};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = v1 & 0.0;
// v2 = .integer
const v5 = [13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
for (let v9 = 0; v9 < 9; v9++) {
    let v12 = 0;
    do {
        const v16 = v12 + 1;
        // v16 = .primitive
        v12 = v16;
    } while (v12 < 8);
}
const v17 = v2 in v5;
// v17 = .boolean
}
%NeverOptimizeFunction(main);
main();
