function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v14 = 0;
            const v18 = "undefined".__proto__;
            // v18 = .object()
            const v19 = v18.slice();
            // v19 = .unknown
            const v20 = v14 + 1;
            // v20 = .primitive
            v14 = v20;
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            v23 = v24;
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
            let v31 = 0;
            do {
                const v32 = v31 + 1;
                // v32 = .primitive
                v31 = v32;
            } while (v31 < 3);
            const v33 = v10 + 1;
            // v33 = .primitive
            v10 = v33;
        } while (v10 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v3(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
