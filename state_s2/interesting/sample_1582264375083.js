function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        const v9 = RegExp.bind(RegExp);
        // v9 = .unknown
        for (const v11 in "boolean") {
            let v14 = 0;
            do {
                let v17 = 0;
                do {
                    const v18 = v17 + 1;
                    // v18 = .primitive
                    v17 = v18;
                } while (v17 < 7);
                const v19 = v14 + 1;
                // v19 = .primitive
                v14 = v19;
            } while (v14 < 8);
        }
        const v20 = v9();
        // v20 = .unknown
        let v23 = 0;
        const v24 = v23 + 1;
        // v24 = .primitive
        v23 = v24;
        const v25 = v7 + 1;
        // v25 = .primitive
        v7 = v25;
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
