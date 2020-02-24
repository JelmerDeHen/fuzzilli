function main() {
let v2 = 0;
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
const v7 = v2 + 1;
// v7 = .primitive
v2 = v7;
const v9 = {a:isFinite};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
function v10(v11,v12) {
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            const v20 = [13.37,13.37,13.37,13.37,13.37];
            // v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v23 = [v20,-1000000000.0];
            // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v25 = [1337,1337,1337,1337];
            // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            function v26(v27,v28) {
                for (const v30 in "boolean") {
                    let v33 = 0;
                    do {
                        let v35 = v25;
                        for (let v41 = 0; v41 < 0; v41++) {
                            const v42 = arguments(v41,1337,v41);
                            // v42 = .unknown
                        }
                        const v43 = v33 + 1;
                        // v43 = .primitive
                        v33 = v43;
                    } while (v33 < 8);
                }
            }
            const v44 = v26();
            // v44 = .unknown
            const v45 = v23.includes(-1000000000.0,-2335287802);
            // v45 = .boolean
            let v47 = 0;
            do {
                const v48 = v47 + 1;
                // v48 = .primitive
                v47 = v48;
            } while (v47 < 7);
            const v49 = v17 + 1;
            // v49 = .primitive
            v17 = v49;
        } while (v17 < 8);
    }
}
const v50 = v10(v9);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
