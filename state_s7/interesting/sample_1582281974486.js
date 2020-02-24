function main() {
function v4(v5,v6) {
    let v10 = 0;
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    let v17 = 0;
    do {
        for (let v21 = 0; v21 < 100; v21++) {
        }
        const v22 = v17 + 1;
        // v22 = .primitive
        v17 = v22;
    } while (v17 < 9);
    const v23 = Boolean.call();
    // v23 = .unknown
    let v26 = 0;
    return 0;
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v29 = v28;
const v30 = v4(v29);
// v30 = .unknown
const v31 = v4(1024,4.0);
// v31 = .unknown
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
}
%NeverOptimizeFunction(main);
main();
