function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v3 = v2;
let v5 = undefined;
for (const v7 in "boolean") {
    let v10 = 0;
    do {
        let v13 = 0;
        while (v13 < 9) {
            const v14 = v13 % 13.37;
            // v14 = .number
            const v15 = v14 + 1;
            // v15 = .primitive
            const v20 = RegExp(1000);
            // v20 = .object()
            const v21 = Function(v20);
            // v21 = .unknown
            const v22 = v21(Int8Array);
            // v22 = .unknown
            v13 = v15;
        }
        const v23 = v10 + 1;
        // v23 = .primitive
        v10 = v23;
    } while (v10 < 8);
}
}
%NeverOptimizeFunction(main);
main();
