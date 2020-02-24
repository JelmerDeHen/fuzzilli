function main() {
Reflect.toString = 9007199254740993;
let v4 = 0;
do {
    const v6 = [13.37,13.37];
    // v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v7 = v6[1024];
    // v7 = .unknown
    let v10 = 0;
    const v11 = v7 - 1;
    // v11 = .primitive
    const v12 = v11 + 1;
    // v12 = .primitive
    v10 = v12;
    const v15 = gc();
    // v15 = .undefined
    const v16 = v4 + 1;
    // v16 = .primitive
    v4 = v16;
} while (v4 < 3);
}
%NeverOptimizeFunction(main);
main();
