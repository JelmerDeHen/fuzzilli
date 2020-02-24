function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v3 = [13.37,v2];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v6(v7,v8) {
    for (const v10 in "boolean") {
        v3.length = v10;
        Object.d = v10;
        const v13 = gc();
        // v13 = .undefined
        let v15 = 0;
        do {
            let v17 = 0;
            Object.valueOf = v8;
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
            const v20 = {};
            // v20 = .object(ofGroup: Object, withProperties: ["__proto__"])
            const v23 = [13.37,13.37];
            // v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v24 = "string";
            let v26 = 1337;
            const v28 = new Int8Array(v26);
            // v28 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
            const v29 = typeof 13.37;
            // v29 = .string
            const v31 = v29 === "object";
            // v31 = .boolean
            let v32 = "string";
            if (v7) {
                const v33 = (0)[13.37];
                // v33 = .unknown
            } else {
                let v36 = 0;
            }
            const v37 = v15 + 1;
            // v37 = .primitive
            v15 = v37;
        } while (v15 < 8);
    }
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v40 = v39;
const v41 = v6(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
