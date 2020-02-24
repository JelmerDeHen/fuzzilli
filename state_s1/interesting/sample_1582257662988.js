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
                // v17 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
                function v19(v20,v21,v22,v23,...v24) {
                }
                const v25 = v19(1337);
                // v25 = .unknown
                for (const v26 of v17) {
                }
            }
            const v28 = [1337];
            // v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
