function main() {
let v3 = 0;
while (v3 < 3) {
    function v4(v5,v6) {
        for (const v8 in "boolean") {
            let v11 = 0;
            let v14 = 0;
            const v18 = isFinite(v6);
            // v18 = .boolean
            const v19 = v14 + 1;
            // v19 = .primitive
            v14 = v19;
            do {
                const v22 = [13.37,13.37,13.37,13.37];
                // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
                const v24 = {b:2147483647};
                // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
                function v25(v26,v27) {
                    return v25;
                }
                const v28 = v22.forEach(v25,v24);
                // v28 = .undefined
                const v29 = v11 + 1;
                // v29 = .primitive
                v11 = v29;
            } while (v11 < 8);
        }
        return v4;
    }
    const v31 = [1337];
    // v31 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v32 = v31;
    const v33 = v4(v32);
    // v33 = .unknown
    const v34 = v3 + 1;
    // v34 = .primitive
    v3 = v34;
}
const v37 = new Float64Array(16766);
// v37 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "__proto__", "byteLength", "buffer", "length"], withMethods: ["entries", "every", "some", "indexOf", "subarray", "lastIndexOf", "findIndex", "keys", "map", "reverse", "reduce", "filter", "sort", "slice", "join", "set", "find", "forEach", "copyWithin", "includes", "reduceRight", "values", "fill"])
const v38 = isFinite(v37);
// v38 = .boolean
const v39 = isFinite(v37);
// v39 = .boolean
}
%NeverOptimizeFunction(main);
main();
