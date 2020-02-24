function main() {
let v3 = 0;
while (v3 < 3) {
    function v5(v6,v7) {
        for (const v9 in "boolean") {
            let v12 = 0;
            do {
                let v15 = 0;
                const v16 = v15 + 1;
                // v16 = .primitive
                v15 = v16;
                const v17 = v12 + 1;
                // v17 = .primitive
                let v20 = 0;
                while (v20 < 4) {
                    const v21 = v20 + 1;
                    // v21 = .primitive
                    v20 = v21;
                }
                v12 = v17;
            } while (v12 < 8);
        }
        const v22 = DataView + 1;
        // v22 = .primitive
        function v23(v24,v25) {
            const v28 = new Int16Array(19873);
            // v28 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
            const v29 = 13.37 * v22;
            // v29 = .number
            for (const v30 of v28) {
            }
        }
        const v32 = [1337];
        // v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v33 = v32;
        const v34 = v23(v33);
        // v34 = .unknown
    }
    const v36 = [1337];
    // v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v37 = v36;
    const v38 = v5(v37);
    // v38 = .unknown
    const v39 = v3 + 1;
    // v39 = .primitive
    v3 = v39;
}
}
%NeverOptimizeFunction(main);
main();
