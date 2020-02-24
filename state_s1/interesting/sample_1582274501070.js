function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            for (const v15 in "boolean") {
                let v18 = 0;
                const v19 = (1337)[1337];
                // v19 = .unknown
                const v20 = v19 % undefined;
                // v20 = .number
                const v21 = [v20,v15,3,13.37];
                // v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                const v22 = v18 + 1;
                // v22 = .primitive
                v18 = v22;
            }
            let v23 = 0;
            const v24 = v23 + 1;
            // v24 = .primitive
            v23 = v24;
            const v25 = v7 + 1;
            // v25 = .primitive
            v7 = v25;
        } while (v7 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
