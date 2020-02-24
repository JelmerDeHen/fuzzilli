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
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
