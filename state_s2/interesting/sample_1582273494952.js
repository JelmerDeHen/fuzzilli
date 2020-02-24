function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    for (const v7 in "boolean") {
        const v10 = Symbol.toPrimitive;
        // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        Symbol[v10] = Symbol;
        const v12 = [13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        Reflect[Symbol] = v12;
    }
}
}
%NeverOptimizeFunction(main);
main();
