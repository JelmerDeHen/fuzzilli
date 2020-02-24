function main() {
function v0(v1,v2) {
    let v10 = 0;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            let v16 = 0;
            do {
                const v17 = v16 + 1;
                // v17 = .primitive
                v16 = v17;
            } while (v16 < 1337);
            let v20 = 0;
            const v24 = v14 + 1;
            // v24 = .primitive
            v14 = v24;
        } while (v14 < 8);
    }
    const v25 = v10 + 1;
    // v25 = .primitive
    v10 = v25;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
