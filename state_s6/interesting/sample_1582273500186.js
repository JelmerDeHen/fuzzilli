function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    for (const v7 in "boolean") {
        const v10 = Symbol.toPrimitive;
        // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        Symbol[v10] = Symbol;
        const v12 = [13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        Reflect[Symbol] = v12;
    }
}
}
%NeverOptimizeFunction(main);
main();
