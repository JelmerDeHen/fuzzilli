function main() {
function v0(v1,v2) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v10 = v8;
            while (v10 < 9) {
                const v11 = v10 % 0;
                // v11 = .number
                const v12 = v11 + 1;
                // v12 = .primitive
                v10 = v12;
            }
            for (const v14 in "boolean") {
                let v17 = 0;
                let v19 = undefined;
                let v22 = 0;
                const v23 = v17 + 1;
                // v23 = .primitive
                v17 = v23;
            }
            const v24 = v8 + 1;
            // v24 = .primitive
            v8 = v24;
        } while (v8 < 8);
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v27 = v26;
const v28 = v0(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
