function main() {
let v2 = 0;
while (v2 < 8) {
    const v4 = [1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v5 = v4;
    let v7 = undefined;
    for (const v9 in "boolean") {
        const v12 = [1337];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
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
