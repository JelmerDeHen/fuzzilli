function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            for (let v13 = 0; v13 < 6; v13++) {
                for (let v17 = 0; v17 < 100; v17++) {
                    function v18(v19,v20) {
                        return v17;
                    }
                }
            }
            let v21 = 0;
            const v22 = v21 + 1;
            // v22 = .primitive
            v21 = v22;
            const v26 = v7 + 1;
            // v26 = .primitive
            v7 = v26;
        } while (v7 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v29 = v28;
const v30 = v0(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
