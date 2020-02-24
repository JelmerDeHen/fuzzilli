function main() {
let v2 = 0;
while (v2 < 8) {
    const v4 = [1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v5 = v4;
    let v7 = undefined;
    for (const v9 in "boolean") {
        const v12 = [1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v15 = Symbol.species;
        // v15 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
        RegExp[v15] = v12;
    }
    const v16 = v2 + 1;
    // v16 = .primitive
    v2 = v16;
}
}
%NeverOptimizeFunction(main);
main();
