function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        const v6 = v5 >> 1337;
        // v6 = .integer
        let v9 = 0;
        do {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                v12 = v13;
            } while (v12 < 7);
            let v16 = 0;
            const v17 = v9 + 1;
            // v17 = .primitive
            v9 = v17;
        } while (v9 < 8);
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v20 = v19;
const v21 = v1(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
