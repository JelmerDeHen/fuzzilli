function main() {
let v2 = 0;
while (v2 < 8) {
    const v4 = [1337];
    // v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v5 = v4;
    let v7 = undefined;
    for (const v9 in "boolean") {
        const v12 = [1337];
        // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        const v15 = Symbol.species;
        // v15 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        RegExp[v15] = v12;
    }
    const v16 = v2 + 1;
    // v16 = .primitive
    v2 = v16;
}
}
%NeverOptimizeFunction(main);
main();
