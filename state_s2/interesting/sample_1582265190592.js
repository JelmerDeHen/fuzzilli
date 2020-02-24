function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {d:isFinite};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["d"])
function v4(v5,v6) {
    let v10 = 0;
    do {
        let v13 = 0;
        const v14 = v13 + 1;
        // v14 = .primitive
        v13 = v14;
        const v15 = v10 + 1;
        // v15 = .primitive
        v10 = v15;
    } while (v10 < 65535);
    let v18 = 0;
    const v19 = v18 / 1337;
    // v19 = .number
    const v20 = v18 + 1;
    // v20 = .primitive
    function v21(v22,v23) {
        let v24 = v19;
    }
}
const v25 = v4(v3);
// v25 = .unknown
const v26 = v1 - 1;
// v26 = .primitive
const v27 = v4(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
