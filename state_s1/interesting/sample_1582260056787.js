function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            for (let v12 = 0; v12 < 3; v12++) {
                function v13(v14,v15) {
                    let v20 = 0;
                    for (const v21 in "boolean") {
                        let v24 = 0;
                        do {
                            try {
                                let v25 = DataView;
                            } catch(v26) {
                            }
                            const v27 = v24 + 1;
                            // v27 = .primitive
                            v24 = v27;
                        } while (v24 < 8);
                    }
                    do {
                        const v28 = "boolean" + 1;
                        // v28 = .primitive
                        v20 = v28;
                    } while (v20 === 3);
                }
                const v30 = [1337];
                // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                let v31 = v30;
                const v32 = v13(v31);
                // v32 = .unknown
            }
            for (let v36 = 0; v36 < 6; v36++) {
                for (let v40 = 0; v40 < 100; v40++) {
                    function v41(v42,v43) {
                    }
                }
            }
            let v44 = 0;
            const v45 = v44 + 1;
            // v45 = .primitive
            v44 = v45;
            const v46 = v7 + 1;
            // v46 = .primitive
            v7 = v46;
        } while (v7 < 8);
    }
    let v47 = v1;
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v50 = v49;
const v51 = v0(v50);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
