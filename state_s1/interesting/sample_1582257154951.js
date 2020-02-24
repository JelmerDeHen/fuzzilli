function main() {
function v0(v1,v2) {
    let v6 = 0;
    let v9 = 0;
    let v12 = 0;
    while (v12 != 65537) {
        const v13 = v12 % 65537;
        // v13 = .number
        const v14 = v13 + 1;
        // v14 = .primitive
        v12 = v14;
    }
    const v15 = v9 + 1;
    // v15 = .primitive
    v9 = v15;
    const v16 = v6 + 1;
    // v16 = .primitive
    v6 = v16;
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v19 = v18;
const v20 = v0(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
