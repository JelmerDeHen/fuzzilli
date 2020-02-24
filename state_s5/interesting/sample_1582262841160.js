function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        for (let v10 = 0; v10 < 6; v10++) {
            function v12(v13,v14) {
                let v16 = 0;
                let v18 = v16;
                if (v13) {
                    const v19 = "iterator".MIN_VALUE;
                    // v19 = .unknown
                    v18 = v19;
                } else {
                }
                const v20 = v18 >= 0;
                // v20 = .boolean
                return v18;
            }
            const v22 = [1337];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
            let v23 = v22;
            const v24 = v12(v23);
            // v24 = .unknown
            const v25 = v12();
            // v25 = .unknown
        }
        let v26 = 0;
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
    }
}
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v30 = v29;
const v33 = new Uint8Array(47774);
// v33 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["copyWithin", "filter", "reverse", "includes", "findIndex", "every", "subarray", "keys", "set", "some", "reduce", "reduceRight", "join", "sort", "indexOf", "entries", "forEach", "values", "lastIndexOf", "find", "slice", "fill", "map"])
const v34 = v0(v30);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
