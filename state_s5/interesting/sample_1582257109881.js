function main() {
let v2 = 0;
while (v2 < 3) {
    const v4 = [1337];
    // v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v5 = v4;
    let v7 = undefined;
    for (const v9 in "boolean") {
        let v12 = 0;
        const v17 = RegExp("eeeRbEqfAO");
        // v17 = .object()
        const v20 = {constructor:"symbol",length:9007199254740993};
        // v20 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
        v20.__proto__ = v17;
        v20[65537] = "symbol";
        const v21 = v12 + 1;
        // v21 = .primitive
        v12 = v21;
    }
    const v22 = v2 + 1;
    // v22 = .primitive
    v2 = v22;
}
}
%NeverOptimizeFunction(main);
main();
