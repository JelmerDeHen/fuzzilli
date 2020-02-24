function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v8 = v7 + 1;
            // v8 = .primitive
            v7 = v8;
        } while (v7 < 512);
        const v13 = [1337,1337,1337];
        // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        function v15(v16,v17) {
            for (let v21 = 0; v21 < 10; v21 = v21 + v16) {
            }
            for (const v22 in "boolean") {
                let v25 = 0;
                let v28 = 0;
                const v29 = v28 + 1;
                // v29 = .primitive
                v28 = v29;
                const v30 = v25 + 1;
                // v30 = .primitive
                v25 = v30;
            }
        }
        const v32 = v15(1024,4.0);
        // v32 = .unknown
        const v33 = v15(v13,v15);
        // v33 = .unknown
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v36 = v35;
const v37 = v0(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
