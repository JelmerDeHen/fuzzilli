function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    for (const v7 in "boolean") {
        const v10 = Symbol.toPrimitive;
        // v10 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        Symbol[v10] = Symbol;
        const v12 = [13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        Reflect[Symbol] = v12;
    }
}
}
%NeverOptimizeFunction(main);
main();
