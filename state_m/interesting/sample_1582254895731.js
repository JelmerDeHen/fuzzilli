function main() {
function v0(v1,v2) {
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            try {
                let v20 = 0;
                do {
                    const v21 = v20 + 1;
                    // v21 = .primitive
                    for (let v25 = 0; v25 < 4; v25++) {
                        "object"[1] = 1337;
                        const v28 = v25 - DataView;
                        // v28 = .number
                    }
                    const v29 = {};
                    // v29 = .object(ofGroup: Object, withProperties: ["__proto__"])
                    const v30 = [v29,v29,v29,v29];
                    // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                    v20 = v21;
                } while (v20 < 7);
            } catch(v31) {
                let v34 = 0;
            }
            const v38 = v17 + 1;
            // v38 = .primitive
            v17 = v38;
        } while (v17 < 8);
    }
    const v39 = v13 + 1;
    // v39 = .primitive
    v13 = v39;
}
const v42 = [1337];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v43 = v42;
const v44 = v0(v43);
// v44 = .unknown
}
%NeverOptimizeFunction(main);
main();
