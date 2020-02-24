function main() {
let v1 = undefined;
for (const v3 in "boolean") {
    let v6 = 0;
    const v8 = [13.37];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    do {
        const v11 = {constructor:"symbol",length:9007199254740993};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
        const v12 = v8[8];
        // v12 = .unknown
        v8.__proto__ = v11;
        let v15 = 0;
        const v16 = v15 + 1;
        // v16 = .primitive
        v15 = v16;
        const v17 = v6 + 1;
        // v17 = .primitive
        v6 = v17;
    } while (v6 < 8);
}
}
%NeverOptimizeFunction(main);
main();
