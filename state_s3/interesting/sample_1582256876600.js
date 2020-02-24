function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            function v12(v13,v14) {
                const v15 = v13 in v12;
                // v15 = .boolean
                let v19 = 0;
                const v20 = v19 + 1;
                // v20 = .primitive
                v19 = v20;
            }
            const v22 = [1337];
            // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            let v23 = v22;
            const v24 = v23.reduce(v12,NaN);
            // v24 = .unknown
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            v27 = v28;
            do {
                const v29 = v10 + 1;
                // v29 = .primitive
                v10 = v29;
            } while (v10 < 7);
            const v30 = v7 + 1;
            // v30 = .primitive
            v7 = v30;
        } while (v7 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v33 = v32;
const v34 = v0(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
