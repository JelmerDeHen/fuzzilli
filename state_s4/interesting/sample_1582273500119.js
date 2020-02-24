function main() {
for (let v3 = 0; v3 < 100; v3++) {
    let v5 = undefined;
    for (const v7 in "boolean") {
        const v10 = Symbol.toPrimitive;
        // v10 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        Symbol[v10] = Symbol;
        const v12 = [13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        Reflect[Symbol] = v12;
    }
}
}
%NeverOptimizeFunction(main);
main();
