function main() {
const v1 = [13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = typeof v1;
// v2 = .string
const v4 = v2 === "boolean";
// v4 = .boolean
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        do {
            const v17 = [1337,1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v20 = (13.37)[1337];
            // v20 = .unknown
            const v21 = typeof Array;
            // v21 = .string
            const v23 = v21 === "undefined";
            // v23 = .boolean
            let v26 = 0;
            let v29 = 0;
            const v30 = v29 | 8;
            // v30 = .integer
            const v31 = v26 + 1;
            // v31 = .primitive
            v26 = v31;
            let v34 = 0;
            do {
                const v35 = v34 + 1;
                // v35 = .primitive
                v34 = v35;
            } while (v34 < 2);
            let v36 = v23;
            v36 = v30;
            let v37 = 0;
            const v38 = v37 + 1;
            // v38 = .primitive
            v37 = v38;
            const v39 = v12 + 1;
            // v39 = .primitive
            v12 = v39;
        } while (v12 < 8);
    }
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v42 = v41;
const v43 = v5(v42);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
