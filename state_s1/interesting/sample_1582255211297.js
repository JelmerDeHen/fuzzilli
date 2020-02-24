function main() {
function v0(v1,v2) {
    let v5 = -2908695906;
    for (const v6 in "undefined") {
        let v9 = 0;
        do {
            let v12 = 0;
            const v13 = v12 + 1;
            // v13 = .primitive
            v12 = v13;
            const v14 = v9 + 1;
            // v14 = .primitive
            v9 = v14;
        } while (v9 < 8);
    }
    const v15 = v5 - 1;
    // v15 = .primitive
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v18 = v17;
const v19 = v0(v18);
// v19 = .unknown
const v20 = v0();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
