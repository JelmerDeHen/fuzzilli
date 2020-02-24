function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            try {
                const v11 = [13.37,13.37,-4294967297,13.37];
                // v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                const v12 = {length:v11,d:Uint8Array};
                // v12 = .object(ofGroup: Object, withProperties: ["length", "d", "__proto__"])
                function v13(v14,v15) {
                    for (const v16 in v12) {
                        let v19 = 0;
                        do {
                            let v22 = 0;
                            while (v22 < 9) {
                                const v23 = v22 % 9;
                                // v23 = .number
                                const v24 = v23 + 1;
                                // v24 = .primitive
                                v22 = v24;
                            }
                            const v25 = v19 + 1;
                            // v25 = .primitive
                            v19 = v25;
                        } while (v19 < 8);
                    }
                }
                const v27 = [1337];
                // v27 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
                let v28 = v27;
                const v29 = v13(v28);
                // v29 = .unknown
                const v30 = v13(v11,v29);
                // v30 = .unknown
                let v33 = 0;
                const v34 = v33 + 1;
                // v34 = .primitive
                v33 = v34;
            } catch(v35) {
                let v38 = 0;
            }
            const v39 = v7 + 1;
            // v39 = .primitive
            v7 = v39;
        } while (v7 < 8);
    }
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v42 = v41;
const v43 = v0(v42);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
