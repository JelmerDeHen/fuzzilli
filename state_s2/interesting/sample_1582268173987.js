function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        const v9 = [255];
        // v9 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v11 = Math.sin(v9);
        // v11 = .number
        do {
            let v13 = v7;
            const v14 = "boolean" + 1;
            // v14 = .primitive
            v13 = v14;
            const v16 = v11[v1];
            // v16 = .unknown
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            const v20 = v7 + 1;
            // v20 = .primitive
            v7 = v20;
        } while (v7 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
