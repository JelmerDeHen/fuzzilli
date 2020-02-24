function main() {
function v0(v1,v2) {
    let v6 = 0;
    let v9 = -256;
    while (v9 < 9) {
        const v10 = v9 % 9;
        // v10 = .number
        const v11 = v9 + 1;
        // v11 = .primitive
        v9 = v11;
    }
    const v12 = v6 + 1;
    // v12 = .primitive
    v6 = v12;
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v15 = v14;
const v16 = v0(v15);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
