function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            const v14 = [13.37,13.37];
            // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v17 = 0;
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            const v19 = Array.isArray(8);
            // v19 = .boolean
            const v23 = typeof v4;
            // v23 = .string
            const v25 = v23 === "function";
            // v25 = .boolean
            let v26 = v7;
            v26 = v14;
            do {
                const v33 = v10 + 1;
                // v33 = .primitive
                v10 = v33;
            } while (v10 < 7);
            const v34 = v7 + 1;
            // v34 = .primitive
            v7 = v34;
        } while (v7 < 8);
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v37 = v36;
const v38 = v0(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
