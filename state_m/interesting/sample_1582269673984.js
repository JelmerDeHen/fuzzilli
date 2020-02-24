function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v4 = v3;
for (const v6 in "boolean") {
    const v9 = v1 - v4;
    // v9 = .number
    const v10 = "boolean".__proto__;
    // v10 = .object()
    const v11 = v10.length;
    // v11 = .unknown
    let v12 = 0;
    do {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    } while (v12 < 8);
}
}
%NeverOptimizeFunction(main);
main();
