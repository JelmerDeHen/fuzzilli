function main() {
const v1 = Promise != Promise;
// v1 = .boolean
const v6 = [13.37,13.37,13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
for (const v13 in "undefined") {
    let v16 = 0;
    function v17(v18,v19) {
    }
    try {
        const v20 = 13.37 in "undefined";
        // v20 = .boolean
    } catch(v21) {
        let v24 = 0;
        const v25 = v24 + 1;
        // v25 = .primitive
        v24 = v25;
    }
    const v26 = v6[1000];
    // v26 = .unknown
    const v27 = !v26;
    // v27 = .boolean
    try {
        const v28 = Promise(...v27,...v17);
        // v28 = .unknown
    } catch(v29) {
    }
    const v30 = v16 + 1;
    // v30 = .primitive
    v16 = v30;
}
}
%NeverOptimizeFunction(main);
main();
