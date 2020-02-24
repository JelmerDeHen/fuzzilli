function main() {
let v3 = 0;
do {
    const v4 = v3 + 1;
    // v4 = .primitive
    function v5(v6,v7) {
        let v10 = 0;
        do {
            const v12 = [1337];
            // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            let v13 = v12;
            let v15 = undefined;
            const v21 = new Int16Array(19873);
            // v21 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
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
    // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v35 = v34;
    const v36 = v5(v35);
    // v36 = .unknown
    v3 = v4;
} while (v3 < 7);
}
%NeverOptimizeFunction(main);
main();
