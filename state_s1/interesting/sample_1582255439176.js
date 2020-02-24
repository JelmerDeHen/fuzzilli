function main() {
const v3 = Symbol.unscopables;
// v3 = .unknown
function v8(v9,v10) {
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v22 = 0;
            let v25 = 0;
            const v26 = [1337,1337,1337];
            // v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v29 = 0;
            while (v29 < 8) {
                for (const v31 in "object") {
                }
                const v32 = v29 + 1;
                // v32 = .primitive
                v29 = v32;
            }
            let v33 = 0;
            const v34 = v33 + 1;
            // v34 = .primitive
            v33 = v34;
            const v35 = v15 + 1;
            // v35 = .primitive
            v15 = v35;
        } while (v15 < 0);
    }
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v38 = v37;
const v39 = v8(v38);
// v39 = .unknown
let v42 = 0;
}
%NeverOptimizeFunction(main);
main();
