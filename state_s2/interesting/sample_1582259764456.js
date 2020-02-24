function main() {
const v4 = {e:13.37,d:"d"};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
const v5 = {e:v4,d:1337};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
let v6 = v5;
const v8 = [1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v9(v10,v11) {
    for (const v13 in "boolean") {
        let v16 = 0;
        do {
            const v17 = {};
            // v17 = .object(ofGroup: Object, withProperties: ["__proto__"])
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
                let v24 = 0;
                do {
                    v6 = v16;
                    const v25 = v24 + 1;
                    // v25 = .primitive
                    v24 = v25;
                } while (v24 < 5);
                const v26 = (0)[0];
                // v26 = .unknown
                const v27 = "symbol"[-2784938012];
                // v27 = .unknown
            } while (v20 < 7);
            const v28 = v20 < 7;
            // v28 = .boolean
            let v29 = v28;
            let v32 = 0;
            while (v32 < 1) {
                const v33 = v29 < 0;
                // v33 = .boolean
                const v34 = v32 + 1;
                // v34 = .primitive
                const v35 = v33 + v34;
                // v35 = .primitive
                const v37 = {set:v9};
                // v37 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
                const v39 = Object.defineProperty(v17,"c",v37);
                // v39 = .undefined
                const v40 = 0 & v35;
                // v40 = .integer
                v32 = v34;
            }
            function v41(v42,v43,v44,v45) {
                const v46 = v10(v8,v20);
                // v46 = .unknown
            }
            const v47 = v16 + 1;
            // v47 = .primitive
            v16 = v47;
        } while (v16 < 8);
    }
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v50 = v49;
const v51 = v9(v50);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();
