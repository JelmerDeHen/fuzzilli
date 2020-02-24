function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
let v4 = undefined;
for (const v6 in "boolean") {
    let v9 = 0;
    function v10(v11,v12) {
        const v15 = 4294967297 + "iterator";
        // v15 = .primitive
        for (const v17 in "boolean") {
            let v20 = 0;
            do {
                let v23 = 0;
                do {
                    const v24 = v23 + 1;
                    // v24 = .primitive
                    v23 = v24;
                } while (v23 < 7);
                const v25 = v20 + 1;
                // v25 = .primitive
                v20 = v25;
            } while (v20 < 8);
        }
    }
    const v27 = [1337];
    // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v28 = v27;
    const v29 = v10(v28);
    // v29 = .unknown
    const v30 = v9 + 1;
    // v30 = .primitive
    v9 = v30;
}
}
%NeverOptimizeFunction(main);
main();
