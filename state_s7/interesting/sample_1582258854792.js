function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v9 = v8;
let v14 = 0;
const v15 = v9 + 1;
// v15 = .primitive
v14 = v15;
function v16(v17,v18) {
    let v26 = 0;
    for (const v27 in "boolean") {
        let v30 = 0;
        do {
            let v33 = 0;
            do {
                const v34 = v33 + 1;
                // v34 = .primitive
                for (let v38 = 0; v38 < 4; v38 = v38 + 2948801160) {
                    const v39 = v38 - DataView;
                    // v39 = .number
                }
                v33 = v34;
            } while (v33 < 7);
            let v42 = 0;
            const v46 = v30 + 1;
            // v46 = .primitive
            v30 = v46;
        } while (v30 < 8);
    }
    const v47 = v26 + 1;
    // v47 = .primitive
    v26 = v47;
}
const v50 = [1337];
// v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v51 = v50;
const v52 = v16(v51);
// v52 = .unknown
}
%NeverOptimizeFunction(main);
main();
