function main() {
const v5 = ["undefined",13.37,13.37];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = v5[v5];
// v8 = .unknown
const v10 = [1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v11 = [13.37,9007199254740991,v10,"symbol"];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v12 = v11;
function v13(v14,v15) {
    for (let v20 = 0; v20 < 10; v20++) {
        const v23 = new Float64Array("iterator");
        // v23 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "buffer", "byteLength", "byteOffset", "__proto__"], withMethods: ["forEach", "indexOf", "keys", "subarray", "fill", "find", "slice", "entries", "filter", "every", "set", "some", "reduceRight", "join", "reverse", "reduce", "copyWithin", "findIndex", "sort", "map", "includes", "lastIndexOf", "values"])
        let v26 = 0;
        while (v26 != 9) {
            let v28 = 0;
            const v29 = -Infinity;
            // v29 = .float
            const v30 = [v29];
            // v30 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            let v32 = 0;
            v23[1] = 0;
            const v33 = v28 + 1;
            // v33 = .primitive
            const v34 = v30 - v28;
            // v34 = .number
            let v35 = 0;
            try {
                const v36 = 0 instanceof 0;
                // v36 = .boolean
                let v37 = "undefined";
                if (v8) {
                    for (const v38 in v10) {
                        for (let v42 = 0; v42 < 100; v42++) {
                            const v43 = v13(9007199254740991,v5);
                            // v43 = .unknown
                        }
                    }
                    v37 = v36;
                } else {
                    const v44 = v30.reduce(v13,1337);
                    // v44 = .unknown
                    v37 = v26;
                }
                v35 = v12;
            } catch(v45) {
                const v46 = v11.__proto__;
                // v46 = .object()
                v35 = v30;
            }
            const v47 = v26 + 1;
            // v47 = .primitive
            v26 = v47;
        }
    }
}
const v49 = [1337];
// v49 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v50 = v49;
const v51 = v13(v50);
// v51 = .unknown
}
%NeverOptimizeFunction(main);
main();