function main() {
function v0(v1,v2) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            try {
                let v16 = 0;
                do {
                    const v17 = v16 + 1;
                    // v17 = .primitive
                    v16 = v17;
                } while (v16 < 7);
            } catch(v18) {
                let v21 = 0;
                while (v21 > 10) {
                }
            }
            const v25 = v13 + 1;
            // v25 = .primitive
            v13 = v25;
        } while (v13 < 8);
    }
    const v26 = v9 + 1;
    // v26 = .primitive
    v9 = v26;
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v30 = v29;
const v31 = v0(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
