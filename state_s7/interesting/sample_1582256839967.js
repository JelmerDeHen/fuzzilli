function main() {
function v0(v1,v2) {
    let v6 = 0;
    do {
        let v9 = 0;
        do {
            const v10 = v9 + 1;
            // v10 = .primitive
            for (let v13 = 0; v13 < v9; v13++) {
            }
            v9 = v10;
        } while (v9 < 7);
        const v14 = v6 + 1;
        // v14 = .primitive
        v6 = v14;
    } while (v6 < 8);
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v17 = v16;
const v18 = v0(v17);
// v18 = .unknown
}
%NeverOptimizeFunction(main);
main();
