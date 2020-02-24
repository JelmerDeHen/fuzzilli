function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "object") {
    let v8 = 0;
    do {
        let v11 = 0;
        while (v11 < 3) {
            function v12(v13,v14) {
                const v17 = new Int16Array(19873);
                // v17 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
                function v19(v20,v21,v22,v23,...v24) {
                }
                const v25 = v19(1337);
                // v25 = .unknown
                for (const v26 of v17) {
                }
            }
            const v28 = [1337];
            // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            let v29 = v28;
            const v30 = v12(v29);
            // v30 = .unknown
            const v31 = v11 + 1;
            // v31 = .primitive
            v11 = v31;
        }
        const v32 = v8 + 1;
        // v32 = .primitive
        v8 = v32;
    } while (v8 < 10);
    let v36 = 0;
    const v40 = v36 + 1;
    // v40 = .primitive
    v36 = v40;
}
}
%NeverOptimizeFunction(main);
main();
