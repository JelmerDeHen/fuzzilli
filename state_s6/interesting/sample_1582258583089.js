function main() {
let v3 = 0;
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v9 = isNaN;
function v10(v11,v12) {
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                const v22 = v9(v20);
                // v22 = .boolean
                try {
                    const v24 = 0 < 1337;
                    // v24 = .boolean
                    const v25 = Map instanceof v7;
                    // v25 = .boolean
                    if (v22) {
                    } else {
                    }
                } catch(v26) {
                }
                v20 = v21;
            } while (v20 < 7);
            const v27 = v17 + 1;
            // v27 = .primitive
            v17 = v27;
        } while (v17 < 8);
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v30 = v29;
const v31 = v10(v30);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
