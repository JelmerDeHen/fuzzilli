function main() {
function v1(v2,v3) {
    const v5 = [1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
