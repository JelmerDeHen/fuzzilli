function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        let v8 = 0;
        try {
            const v9 = v8 in "undefined";
            // v9 = .boolean
        } catch(v10) {
        }
        const v13 = new Int16Array(19873);
        // v13 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
        for (const v14 of v13) {
        }
    }
    const v16 = [1337];
    // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v17 = v16;
    const v18 = v3(v17);
    // v18 = .unknown
    const v19 = v2 + 1;
    // v19 = .primitive
    v2 = v19;
} while (v2 <= 3);
}
%NeverOptimizeFunction(main);
main();
