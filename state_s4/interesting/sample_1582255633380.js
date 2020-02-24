function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (let v11 = 0; v11 < 10; v11++) {
            function v12(v13,v14) {
                for (const v16 in "boolean") {
                    let v19 = 0;
                    let v22 = 0;
                    const v23 = v22 + 1;
                    // v23 = .primitive
                    v22 = v23;
                    const v24 = v19 + 1;
                    // v24 = .primitive
                    v19 = v24;
                }
            }
            const v26 = [1337];
            // v26 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
            let v27 = v26;
            const v28 = v12(v27);
            // v28 = .unknown
        }
        let v31 = 0;
        let v34 = 0;
        let v37 = 0;
        const v38 = v37 + 1;
        // v38 = .primitive
        v37 = v38;
        let v44 = 0;
        let v47 = 0;
        const v48 = v34 + 1;
        // v48 = .primitive
        v34 = v48;
        const v49 = v31 + 1;
        // v49 = .primitive
        function v50(v51,v52) {
            for (let v57 = 0; v57 < 10; v57++) {
            }
            let v60 = 9007199254740992;
            let v63 = 0;
            let v66 = 0;
            const v67 = v66 + 1;
            // v67 = .primitive
            v66 = v67;
            const v68 = v63 + 1;
            // v68 = .primitive
            v63 = v68;
        }
        const v70 = [1337];
        // v70 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v71 = v70;
        const v72 = v50(v71);
        // v72 = .unknown
        const v74 = v50(1);
        // v74 = .unknown
        v31 = v49;
    }
    const v77 = [1337];
    // v77 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v78 = v77;
    const v79 = v4(v78);
    // v79 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
