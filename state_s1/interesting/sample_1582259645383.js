function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            do {
                const v11 = v10 + 1;
                // v11 = .primitive
                const v15 = [1337];
                // v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                let v16 = v15;
                let v18 = undefined;
                for (const v21 in "boolean") {
                    let v24 = 0;
                    const v25 = (1337)[1337];
                    // v25 = .unknown
                    const v26 = v25 * undefined;
                    // v26 = .number
                    let v29 = 0;
                    const v30 = v29 + 1;
                    // v30 = .primitive
                    v29 = v30;
                    const v31 = [v26,v21,3,13.37];
                    // v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                    const v32 = v24 + 1;
                    // v32 = .primitive
                    v24 = v32;
                }
                v10 = v11;
            } while (v10 < 7);
            const v33 = v7 + 1;
            // v33 = .primitive
            v7 = v33;
        } while (v7 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v36 = v35;
const v37 = v0(v36);
// v37 = .unknown
let v40 = 0;
const v41 = v40 + 1;
// v41 = .primitive
v40 = v41;
const v45 = 1337 == 13.37;
// v45 = .boolean
}
%NeverOptimizeFunction(main);
main();
