function main() {
let v2 = 0;
do {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    function v10(v11,v12) {
        const v16 = RegExp.bind(8);
        // v16 = .unknown
        for (const v18 in "boolean") {
            let v21 = 0;
            do {
                let v24 = 0;
                do {
                    const v25 = v24 + 1;
                    // v25 = .primitive
                    v24 = v25;
                } while (v24 < 7);
                const v26 = v21 + 1;
                // v26 = .primitive
                v21 = v26;
            } while (v21 < 8);
        }
        const v27 = v16();
        // v27 = .unknown
    }
    const v29 = [1337];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v30 = v29;
    const v31 = v10(v30);
    // v31 = .unknown
    const v32 = v2 + 1;
    // v32 = .primitive
    v2 = v32;
} while (v2 < 6);
}
%NeverOptimizeFunction(main);
main();
