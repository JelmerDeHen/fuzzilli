function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
            const v14 = [];
            // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v15 = "function";
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                let v26 = 0;
                let v29 = 0;
                let v32 = 0;
                let v35 = 0;
                v18 = v19;
            } while (v18 < 7);
            const v37 = v18 * 13.37;
            // v37 = .number
            v14[v37] = v15;
            const v38 = v7 + 1;
            // v38 = .primitive
            v7 = v38;
        } while (v7 < 8);
    }
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v41 = v40;
const v42 = v0(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
