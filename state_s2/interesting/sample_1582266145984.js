function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            for (let v14 = 0; v14 < 6; v14++) {
                function v16(v17,v18) {
                    function v19(v20,v21) {
                    }
                    return v19;
                }
                const v23 = v16(1024,4.0);
                // v23 = .unknown
            }
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
            const v35 = v7 + 1;
            // v35 = .primitive
            v7 = v35;
        } while (v7 < 8);
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v38 = v37;
const v39 = v0(v38);
// v39 = .unknown
}
%NeverOptimizeFunction(main);
main();
