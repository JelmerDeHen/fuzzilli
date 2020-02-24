function main() {
let v2 = 0;
while (v2 < 8) {
    const v4 = [1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v5 = v4;
    let v7 = undefined;
    for (const v9 in "boolean") {
        const v12 = [1337];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
