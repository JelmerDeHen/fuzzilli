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
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v20 = v19;
const v21 = v0(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
