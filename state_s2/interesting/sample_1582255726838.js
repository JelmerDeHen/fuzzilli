function main() {
function v1(v2,v3) {
    const v5 = [1337];
    // v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v8 = 0;
    while (v8 < 10) {
        v5.length = 2147483648;
        const v10 = v8 + 1;
        // v10 = .primitive
        v8 = v10;
    }
}
for (let v15 = 0; v15 < 100; v15++) {
    const v16 = v1("boolean",1337);
    // v16 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
