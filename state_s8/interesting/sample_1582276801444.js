function main() {
function v0(v1,v2) {
    let v5 = 0;
    let v8 = 0;
    while (v8 < 256) {
        const v9 = v8 % 256;
        // v9 = .number
        const v10 = v9 + 1;
        // v10 = .primitive
        v8 = v10;
    }
    const v11 = v5 + 1;
    // v11 = .primitive
    v5 = v11;
}
const v13 = [-4054699681];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
