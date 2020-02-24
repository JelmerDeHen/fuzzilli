function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        const v10 = [1337,1337,1337,1337];
        // v10 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v11 = {b:2147483647};
        // v11 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
        function v12(v13,v14) {
        }
        const v16 = v10.findIndex(v12,v11);
        // v16 = .integer
        const v17 = v7 + 1;
        // v17 = .primitive
        v7 = v17;
    }
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v24 = v22;
            while (v24 < 9) {
                const v25 = v24 % 9;
                // v25 = .number
                const v26 = v25 + 1;
                // v26 = .primitive
                v24 = v26;
            }
            const v31 = [1337];
            // v31 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            for (const v34 in "boolean") {
                let v37 = 0;
                do {
                    function v38(v39,v40) {
                        const v41 = v37 * v37;
                        // v41 = .number
                        const v42 = Object(v40);
                        // v42 = .object()
                        let v45 = 0;
                        do {
                        } while (v45 < 0);
                        const v46 = v31.length;
                        // v46 = .integer
                        v42[v41] = v45;
                    }
                    const v47 = v38();
                    // v47 = .unknown
                    const v48 = v37 + 1;
                    // v48 = .primitive
                    v37 = v48;
                } while (v37 < 8);
            }
            const v49 = [1337,1337,1337,1337,1337];
            // v49 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            function v50(v51,v52) {
                const v53 = Uint8Array instanceof v50;
                // v53 = .boolean
            }
            const v54 = v49.forEach(v50,"eeeRbEqfAO");
            // v54 = .undefined
            const v55 = v22 + 1;
            // v55 = .primitive
            v22 = v55;
        } while (v22 < 8);
    }
}
const v57 = [1337];
// v57 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v58 = v57;
const v59 = v0(v58);
// v59 = .unknown
}
%NeverOptimizeFunction(main);
main();
