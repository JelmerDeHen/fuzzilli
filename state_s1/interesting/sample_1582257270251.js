function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            const v10 = [13.37,13.37,-4294967297,13.37];
            // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v13 = 0;
            do {
                let v16 = 0;
                const v17 = v16 % 9;
                // v17 = .number
                const v18 = v17 + 1;
                // v18 = .primitive
                v16 = v18;
                const v19 = v13 + 1;
                // v19 = .primitive
                v13 = v19;
            } while (v13 < 8);
            v10[9] = 100;
            const v21 = v7 + 1;
            // v21 = .primitive
            v7 = v21;
        } while (v7 < 8);
    }
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v24 = v23;
const v25 = v0(v24);
// v25 = .unknown
let v29 = 0;
}
%NeverOptimizeFunction(main);
main();
