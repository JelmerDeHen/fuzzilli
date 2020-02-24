function main() {
function v1(v2,v3) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            let v22 = 0;
            const v25 = v15 + 1;
            // v25 = .primitive
            v15 = v25;
        } while (v15 < 8);
    }
    do {
        const v26 = v11 + 1;
        // v26 = .primitive
        v11 = v26;
        const v27 = v26 - v26;
        // v27 = .number
        "boolean"[v27] = v27;
    } while (v11 < 3);
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v32 = v31;
const v33 = v1(v32);
// v33 = .unknown
const v34 = v1();
// v34 = .unknown
const v35 = v1("undefined",4.0);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
