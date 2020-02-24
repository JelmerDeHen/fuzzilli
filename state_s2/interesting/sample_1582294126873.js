function main() {
const v1 = "MAX_SAFE_INTEGER".__proto__;
// v1 = .object()
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 2;
        do {
            let v11 = v9;
            const v12 = v11 % 9;
            // v12 = .number
            const v13 = v12 + 1;
            // v13 = .primitive
            for (const v17 in "boolean") {
                let v20 = 0;
                do {
                    let v23 = 0;
                    const v24 = v9 * v13;
                    // v24 = .number
                    const v25 = v20 + 1;
                    // v25 = .primitive
                    v20 = v25;
                } while (v20 < 8);
            }
            const v26 = [1337,1337,1337,1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            function v27(v28,v29) {
            }
            const v30 = v26.forEach(v27,"eeeRbEqfAO");
            // v30 = .undefined
            const v31 = v30 + 1;
            // v31 = .primitive
            v9 = v31;
        } while (v9 < 8);
    }
}
const v33 = [-465690606];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v34 = v33;
const v35 = v2(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
