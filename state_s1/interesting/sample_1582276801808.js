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
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v14 = v13;
const v15 = v0(v14);
// v15 = .unknown
}
%NeverOptimizeFunction(main);
main();
