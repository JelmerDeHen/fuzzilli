function main() {
for (const v2 of "iterator") {
    v2.valueOf = v2;
    const v4 = v2.buffer;
    // v4 = .unknown
    const v5 = "iterator".length;
    // v5 = .integer
    const v9 = [1337];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v10 = [13.37,v9,Uint16Array];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v12 = 0;
    do {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    } while (v12 < 4);
}
let v16 = 0;
}
%NeverOptimizeFunction(main);
main();
