function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    for (const v7 in "boolean") {
        const v10 = Symbol.toPrimitive;
        // v10 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        Symbol[v10] = Symbol;
        const v12 = [13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        Reflect[Symbol] = v12;
    }
}
}
%NeverOptimizeFunction(main);
main();
