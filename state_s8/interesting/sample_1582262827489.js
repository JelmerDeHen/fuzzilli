function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v8 = v6 + 1;
    // v8 = .primitive
    v6 = v8;
    let v12 = 0;
    do {
        let v14 = v12;
        while (v14 < 512) {
            const v15 = v14 % 512;
            // v15 = .number
            const v16 = v15 + 1;
            // v16 = .primitive
            v14 = v16;
        }
        const v17 = v12 + 1;
        // v17 = .primitive
        v12 = v17;
    } while (v12 < 8);
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v20 = v19;
const v21 = v0(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
