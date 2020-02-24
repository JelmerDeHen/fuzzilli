function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        let v10 = 0;
        do {
            const v12 = [1337];
            // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
            let v13 = v12;
            let v15 = undefined;
            const v21 = new Int16Array(19873);
            // v21 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
            const v22 = v10 + 1;
            // v22 = .primitive
            v10 = v22;
        } while (v10 <= 3);
        for (const v24 in "boolean") {
            let v26 = 0;
            let v28 = -1073741824;
            do {
                const v29 = v28 + 1;
                // v29 = .primitive
                v6[v29] = 7;
                v28 = v29;
            } while (v28 < v28);
            let v31 = 0;
            const v32 = v5 + 1;
            // v32 = .primitive
            v26 = v32;
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v35 = v34;
    const v36 = v5(v35);
    // v36 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
