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
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v30 = v29;
const v33 = new Uint8Array(47774);
// v33 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
const v34 = v0(v30);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
