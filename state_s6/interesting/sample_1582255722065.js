function main() {
function v1(v2,v3) {
    const v5 = [1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
